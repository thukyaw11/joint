<template>
  <div class="row pt-4">
    <div class="col-8" style="text-align:left;">
      <h5 style="font-weight:bold;">Newest</h5>
    </div>
    <div class="scrollMenu">
      <div v-for="newest in newests" v-bind:key="newest.id">
        <router-link :to="`/viewBlogNewest/${newest.id}`">
          <img :src="newest.thumbnail" alt class="image" />
        </router-link>
        <p class="book_title">{{newest.title}}</p>
        <p class="book_author">{{newest.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Newest } from "../content/newest";
export default {
  data() {
    return {
      newests: Newest
    };
  }
};

/* eslint-enable no-console */
</script>
