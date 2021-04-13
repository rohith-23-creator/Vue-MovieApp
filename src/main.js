import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import MovieDetails from './components/MovieDetails.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/movie/:id', component: MovieDetails }
  ]
});

app.use(router);
app.mount('#app');
