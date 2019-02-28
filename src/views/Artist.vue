<template>
  <div class="artist">
    <div class="controls">
      <router-link to="/artists">
        <img class="back-button" src="img/icons/back-arrow.svg">
      </router-link>
    </div>

    <div class="content">
      <div class="header">
        <img class="artist-image" :src="`img/${artist.image}`" :style="artistImageStyle">
        <div class="artist-quickinfo">
          <h1 class="artist-name">{{ artist.name }}</h1>
          <div class="artist-category">{{ artist.category }}</div>
        </div>
      </div>

      <div class="music">
        <div class="albums">
          <div class="album" v-for="album in artist.albums" :key="album.title">
            <img class="album-image" :src="`img/albums/${album.image}`">
            <div class="album-title">{{ album.title }}</div>
            <div class="album-year">{{ album.year }}</div>
          </div>
        </div>

        <div class="tracks">
          <div class="tracks-popular">
            <h3>Popular</h3>

            <div class="track-listing">
              <div class="track" v-for="track in artist.popularTracks" :key="track.title">
                <img class="track-album-image" :src="`img/albums/${track.albumImage}`">

                <div class="track-title-artist">
                  <div class="track-title">{{ track.title }}</div>
                  <div class="track-artist">{{ artist.name }}</div>
                </div>

                <div class="track-length">
                  {{ track.length }}
                </div>

                <div class="track-controls">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artists from '../data/artists.json';

export default {
  name: 'artist',
  computed: {
    artist() { return artists.find(a => this.$route.params.slug === a.slug); },
    originalImageRect() {
      return this.$route.params.originalImageRect || { x: 0, y: 0, width: 0 };
    },
    artistImageStyle() {
      const newImageRect = document.querySelector('.artist-image').getBoundingClientRect();
      const x = this.originalImageRect.x - newImageRect.x - 42;
      const y = this.originalImageRect.y - newImageRect.y + 95;
      const scale = 0.75;
      return {
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      };
    },
  },
};
</script>

<style scoped>
.artist {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  grid-column-gap: 2rem;
}

.back-button {
  height: 1.5rem;
  width: 1.5rem;
}

.header {
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-column-gap: 2rem;
}

.artist-image {
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  object-fit: cover;
  transform-origin: 0px 0px;
  animation: reposition 0.25s forwards;
}

.artist-name {
  margin: 0;
  font-size: 3rem;
}

.artist-category {
  font-size: 1.5rem;
}

.artist-quickinfo {
  transform: translateX(-25%);
  opacity: 0;
  animation: slideIntoPlace 0.5s forwards;
}

.music {
  transform: translateY(100%);
  animation: slideIntoPlace 0.5s forwards;
}

.albums {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5rem;
  margin-top: -5rem;
  max-width: 87vw;
  overflow: hidden;
  color: #000000;
}

.album {
  margin: 0 3rem;
}

.album-image {
  height: 160px;
  width: 160px;
  box-shadow: 0 1rem 1rem #555555;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
}

.album-title {
  font-weight: bold;
}

.tracks {
  background-color: #FFFFFF;
  color: #000000;
  padding-top: 12rem;
  margin-top: -10rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.tracks h3 {
  font-size: 2rem;
  color: #555555;
}

.tracks-popular {
  padding: 0 0 3rem 3rem;
}

.track {
  display: grid;
  grid-template-columns: 4rem 4fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3rem;
}

.track > div {
  line-height: 4;
}

.track-album-image {
  height: 48px;
  width: 48px;
  border-radius: 0.5rem;
}

.track-title {
  line-height: 2;
  font-weight: bold;
}

.track-artist {
  color: #777;
  line-height: 1.5;
}

@keyframes slideIntoPlace {
  to {
    transform: translate(0);
    opacity: 1;
  }
}

@keyframes reposition {
  to {
    transform: translate(0, 0);
  }
}
</style>
