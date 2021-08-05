<template>
  <div
    :class="{
      card: true,
      read: book.read,
    }"
  >
    <div class="book-title">
      {{ book.title }}
    </div>
    <img
      v-if="book.isbn"
      v-bind:src="
        'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'
      "
    />
    <div class="book-author">{{ book.author }}</div>
    <button class="toggle-btn" v-on:click="toggleRead(book.isbn)">
      Mark
      {{ !book.read ? "Read" : "Unread" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "book-card",
  props: ["book"],
  methods: {
    toggleRead: function (isbn) {
      this.$store.commit("TOGGLE_READ_STATUS", isbn);
    },
  },
};
</script>

<style>
.card {
  border: 2px solid black;
  border-radius: 10px;
  width: 250px;
  height: 550px;
  margin: 20px;
}

.card.read {
  background-color: lightgray;
}

.card .book-title {
  font-size: 1.5rem;
}
.toggle-btn {
  margin-top: 2.5rem;
}
.card .book-author {
  font-size: 1rem;
}
</style>