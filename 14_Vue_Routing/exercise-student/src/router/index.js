import Vue from 'vue';
import VueRouter from 'vue-router';
import BestSellerList from "@/components/BestSellerList";
import NewReleasesList from "@/components/NewReleasesList";
import ReadingList from "@/components/ReadingList";
import NewBookForm from "@/components/NewBookForm";
import BooksDetails from "@/components/BooksDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
      bestSeller: BestSellerList,
      newRelease: NewReleasesList
    },
    name: "home"
  },
  {
    path:'/myBooks',
    components: {
      readingList: ReadingList
    },
    name:'MyBooks'
  },
  {
    path:'/addBook',
    components: {
      bookForm: NewBookForm
    },
    name:'NewBook'
  },
  {
    path:'/book/:isbn',
    name: 'BookDetail',
    component: BooksDetails
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
