<template>
  <div class="movie-details">
    <div class="detail">
      <h2>Name - {{ movie.Title }}</h2>
      <p>Released Year - {{ movie.Year }}</p>
      <p>Type - {{ movie.Type }}</p>
    </div>
    <div class="plot-flex">
      <img :src="movie.Poster" alt="" />
      <p class="plot">{{ movie.Plot }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(
        `http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
      )
        .then(res => res.json())
        .then(data => (movie.value = data));
    });
    return {
      movie
    };
  }
};
</script>

<style scoped>
.movie-details {
  width: 90%;
  margin: auto;
}

img {
  width: 250px;
  height: 250px;
  margin: 1rem;
}

.plot-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
}

.plot {
  width: 70%;
  margin: auto;
}

.detail {
  margin: 2rem 0;
}

.detail h2 {
  margin-top: 2rem;
}

.detail h2,
p {
  padding: 0.3rem 0;
  text-transform: capitalize;
}
@media (max-width: 720px) {
  .plot {
    width: 90%;
  }
}
</style>
