<template>

  <div>
    <h2 class="book-title">{{ book.title }}</h2>
    <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
    <h3 class="book-author">{{ book.author }}</h3>
  </div>
</template>

<script>
export default {
  name: "BooksDetails",

  computed:{
    book(){

      return this.$store.state.books.find(item=>item.isbn=this.$route.params.isbn)
    }

  }
}

</script>

<style scoped>

</style>