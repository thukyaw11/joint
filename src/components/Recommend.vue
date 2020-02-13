<template>
  <div class="row pt-4">
    <div class="col-8" style="text-align:left;">
      <h5 style="font-weight:bold;">Recommended</h5>
    </div>
    <div class="scrollMenu">
      <div v-for="recommend in recommends" v-bind:key="recommend.id">
        <router-link :to="`/viewBlogRecommend/${recommend.id}`">
          <img :src="recommend.thumbnail" alt class="image" />
        </router-link>
        <p class="book_title">{{recommend.title}}</p>
        <p class="book_author">{{recommend.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Recommend } from "../content/recommended";
export default {
  data() {
    return {
      recommends : Recommend
    };
  }
};

/* eslint-enable no-console */
</script>
