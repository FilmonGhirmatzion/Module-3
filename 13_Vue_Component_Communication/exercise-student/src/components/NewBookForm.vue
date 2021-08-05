<template>
  <div>
    <form class="new-book-form">
      <h3>Add New Book</h3>
      <label for="title">Title</label><br />
      <input type="text" id="title" name="title" class="title-input" /><br />
      <label for="author">Author:</label><br />
      <input
        type="text"
        id="author"
        name="author"
        class="author-input"
      /><br /><br />
      <label for="isbn">ISBN:</label><br />
      <input
        type="text"
        id="isbn"
        name="isbn"
        class="author-input"
      /><br /><br />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>
<script>
export default {
  name: "new-book-form",
};
</script>
<style>
.new-book-form {
  text-align: left;
}
</style>