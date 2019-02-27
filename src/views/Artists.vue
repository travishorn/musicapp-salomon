<template>
  <div>
    <h1>Artists</h1>
    <h2>Trending Now</h2>

    <div class="artists">
      <div class="artist"
           v-for="artist in artists"
           :key="artist.id"
           :data-artistId="artist.id"
           @click="artistSelected">
        <img class="artist-image" :src="`img/${artist.image}`">
        <div class="artist-content">
          <div class="artist-name">{{ artist.name }}</div>
          <div class="artist-category">{{ artist.category }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artists from '../data/artists.json';

export default {
  name: 'artists',
  data() {
    return {
      artists,
    };
  },
  methods: {
    artistSelected(e) {
      const artist = e.path.find(el => el.classList.contains('artist'));
      const artistId = Number(artist.dataset.artistid);
      const originalImageRect = artist.querySelector('.artist-image').getBoundingClientRect();

      this.$router.push({
        name: 'artist',
        params: {
          slug: artists.find(a => a.id === artistId).slug,
          originalImageRect,
        },
      });
    },
  },
};
</script>

<style scoped>
.artists {
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-gap: 2rem;
}

h1 {
  font-size: 1rem;
  color: #E63B51;
  font-weight: normal;
  margin-bottom: 1rem;
}

h2 {
  margin: 0 0 3rem 0;
  font-weight: normal;
}

.artist {
  cursor: pointer;
}

.artist-image {
  width: 15rem;
  height: 15rem;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
  vertical-align: bottom;
}

.artist-content {
  color: #FFFFFF;
  background-color: #696F9C;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  padding: 0.5rem 0;
}

.artist-category {
  font-size: 0.8rem;
}
</style>
