<template>
  <div class="row">
    <div
      v-for="popular in populars"
      v-bind:key="popular.id"
      id="defalut_container"
      class="col-12 col-sm-4"
    >
      <router-link :to="`/viewBlog/${popular.id}`">
        <img :src="popular.thumbnail" class="image-default mb-1" />
      </router-link>
      <h3 class="book_title_default">{{popular.title}}</h3>
      <h6 class="book_author_default mb-3">{{popular.author}}</h6>
      <hr>
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
.image-default {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
.book_title_default{
    font-weight: bold;
}
</style>