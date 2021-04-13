<template>
  <div>
    <form class="form" @submit.prevent="searchMovie">
      <input type="text" v-model="searchTerm" placeholder="Search movies..." />
      <button type="submit">Search</button>
    </form>
    <div class="movies">
      <div class="movies-list" v-for="movie in movies" :key="movie.imdbID">
        <div class="poster">
          <img :src="movie.Poster" alt="movie poster" />
        </div>
        <div class="movie-detail">
          <p class="TandY">{{ movie.Title }} - {{ movie.Year }}</p>
        </div>
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link"
          >View Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import env from '@/env.js';
import { ref } from 'vue';
export default {
  setup() {
    const searchTerm = ref('');
    const movies = ref([]);
    function searchMovie() {
      if (searchTerm.value != null || searchTerm.value != '') {
        fetch(
          `http://www.omdbapi.com/?apikey=${env.apikey}&s=${searchTerm.value}`
        )
          .then(res => res.json())
          .then(data => {
            (movies.value = data.Search),
              (searchTerm.value = ''),
              console.log(movies.value);
          });
      }
    }
    return {
      searchTerm,
      movies,
      searchMovie
    };
  }
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 40vh;
  margin: auto;
}

input {
  display: block;
  border: 1px solid #555;
  background: none;
  padding: 0.75rem;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #555;
  font-family: inherit;
  font-size: 18px;
}

input::placeholder {
  color: #555;
}

button {
  display: inline-block;
  padding: 1.05rem;
  font-family: inherit;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fe0365;
  appearance: none;
  outline: none;
  color: #fff;
  cursor: pointer;
}

button:focus {
  outline: none;
  border: none;
}

input:focus {
  border: 1px solid #555;
  outline: 0;
}

button:hover {
  opacity: 0.9;
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
  width: 100%;
  column-gap: 2rem;
  row-gap: 2em;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
}

.movie-list {
  max-width: 50%;
  flex: 1 1 100%;
  padding: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
}

.movie-link {
  background-color: #fe0365;
  padding: 8px 16px;
  color: #fff;
  border-radius: 5px;
}

.TandY {
  margin-bottom: 1rem;
  display: block;
}

img {
  height: 350px;
}

.movies .movies-list {
  width: 100%;
  object-fit: cover;
}

.poster {
  position: relative;
  display: block;
}

img {
  object-fit: cover;
}

.type {
  display: flex;
  justify-content: flex-start;
  position: absolute;
  text-transform: capitalize;
  bottom: 16px;
  left: 0px;
  padding: 8px 16px;
  background-color: #fe0365;
  color: #fff;
}

.movie-link {
  text-decoration: none;
}
@media (max-width: 600px) {
  .form {
    width: 400px;
  }
}

@media (max-width: 400px) {
  .form {
    width: 300px;
  }
}
</style>
