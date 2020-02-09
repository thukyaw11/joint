<template>
  <div class="row pt-4">
    <div class="col-8" style="text-align:left;">
      <h5 style="font-weight:bold;">Recommended</h5>
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
