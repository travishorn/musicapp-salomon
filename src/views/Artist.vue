<template>
  <div class="artist">
    <div class="controls">
      <router-link to="/artists">
        <img class="back-button" src="/img/icons/back-arrow.svg">
      </router-link>
    </div>

    <div class="content">
      <div class="header">
        <img class="artist-image" :src="`/img/${artist.image}`" :style="artistImageStyle">
        <div class="artist-quickinfo">
          <h1 class="artist-name">{{ artist.name }}</h1>
          <div class="artist-category">{{ artist.category }}</div>
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
  z-index: 2;
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
  z-index: 1;
  transform: translateX(-25%);
  opacity: 0;
  animation: slideRight 0.5s forwards;
}

@keyframes slideRight {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes reposition {
  to {
    transform: translate(0, 0);
  }
}
</style>
