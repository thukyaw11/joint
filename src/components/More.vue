<template>
  <div class="row col-12">
    <div
      v-for="moreArticle in moreArticles"
      v-bind:key="moreArticle.id"
      id="defalut_container"
      class="col-12 col-sm-4"
    >
      <router-link :to="`/viewBlogDefaultt/${moreArticle.id}`">
        <img :src="moreArticle.thumbnail" class="image-default mb-1" />
      </router-link>
      <h4 class="book_title_default">{{moreArticle.title}}</h4>
      <h6 class="book_author_default mb-3">{{moreArticle.author}}</h6>
      <hr />
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { Defaultt } from "../content/defaultt";
export default {
  data() {
    return {
      defaultts: Defaultt,
      moreArticles: []
    };
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  },
  mounted() {
    //more articles
    for (var index = 0; index < 3; index++) {
      this.moreArticles.push(this.defaultts[this.getRandomInt(4)]);
      console.log(this.moreArticles);
    }
    
  }
};
/* eslint-enable no-console */
</script>

