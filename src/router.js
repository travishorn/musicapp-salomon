import Vue from 'vue';
import Router from 'vue-router';
import Artists from './views/Artists.vue';
import Artist from './views/Artist.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/artists',
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists,
    },
    {
      path: '/artist/:slug',
      name: 'artist',
      component: Artist,
    },
  ],
});
