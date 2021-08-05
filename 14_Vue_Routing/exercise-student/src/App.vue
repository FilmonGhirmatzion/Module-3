<template>
  <div id="app">

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/myBooks">My Books</router-link>
    </nav>

    <router-view />
    <router-view name="bestSeller" />
    <router-view name="newRelease" />
    <router-view name="readingList" />
    <router-view name="bookForm" />

  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
