<template>
  <div class="container">
    <div class="sidebar">
      <div class="nav">
        <div class="nav-title">Library</div>
        <a class="nav-link active" href="#">Artists</a>
        <a class="nav-link" href="#">Albums</a>
        <a class="nav-link" href="#">Songs</a>
        <a class="nav-link" href="#">Playlists</a>
      </div>

      <div class="nav">
        <div class="nav-title">Discover</div>
        <a class="nav-link" href="#">Store</a>
        <a class="nav-link" href="#">Radio</a>
        <a class="nav-link" href="#">For You</a>
        <a class="nav-link" href="#">Browse</a>
      </div>
    </div>

    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=B612');

html { font-size: 12px; }

body {
  font-family: 'B612', sans-serif;
  color: #FFFFFF;
  background-color: #191A28;
}

.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 5rem;
}

.nav {
  margin-bottom: 5rem;
  color: #82828A;
}

.nav-title {
  text-transform: uppercase;
}

.nav-link {
  display: block;
  text-decoration: none;
  color: #82828A;
  margin: 2rem 0;
}

.nav-link.active {
  color: #E63B51;
}
</style>
