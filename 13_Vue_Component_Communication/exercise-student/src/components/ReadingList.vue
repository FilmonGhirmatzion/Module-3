<template>
  <div class="book-container">
    <book-card
      v-for="bks in this.$store.state.books"
      :key="bks.isbn"
      :book="bks"
    />
    <new-book-form />
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";
import NewBookForm from "./NewBookForm";
export default {
  components: { BookCard, NewBookForm },
  name: "reading-list",
};
</script>

<style>
.book-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>





