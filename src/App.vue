<template>
  <div class="header-nav">
    <router-link to="/" class="link">
      <h1>VueMovies</h1>
    </router-link>
  </div>
  <router-view to="/"> </router-view>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.header-nav {
  position: relative;
  height: 70px;
  width: 100%;
  color: #fff;
  background-color: #fe0365;
}
h1 {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto';
  background-color: #f3f3f3;
}

.link {
  text-decoration: none;
  color: #fff;
}
</style>
