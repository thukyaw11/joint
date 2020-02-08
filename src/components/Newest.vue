<template>
  <div class="row pt-4">
    <div class="col-8" style="text-align:left;">
      <h5 style="font-weight:bold;">Newest</h5>
    </div>
    <div class="scrollMenu">
      <div v-for="popular in populars" v-bind:key="popular.id">
        <router-link :to="`/viewBlog/${popular.id}`">
          <img :src="popular.thumbnail" alt class="image" />
        </router-link>
        <p class="book_title">{{popular.title}}</p>
        <p class="book_author">{{popular.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Popular } from "../content/popular";
export default {
  data() {
    return {
      populars: Popular
    };
  }
};

/* eslint-enable no-console */
</script>

<style>
.scrollMenu {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
}
.scrollMenu::-webkit-scrollbar {
  display: none;
}
.image {
  height: 180px;
  width: 160px;
  margin: 5px;
  border-radius: 6px;
  cursor: pointer;
}
.book_title {
  font-weight: bold;
  padding: 9px 9px 0 9px;
  cursor: pointer;
  text-align: left;
}
.book_author {
  text-align: left;
  padding: 0 9px 0 9px;
}
.image:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  transition: 1s;
}
</style>