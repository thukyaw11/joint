<template>
  <div class="container">
    <div class="row">
      <div
        v-for="favouriate in favouriates"
        v-bind:key="favouriate.id"
        id="defalut_container"
        class="col-12 col-sm-4"
      >
        <router-link :to="`/viewBlogPopular/${favouriate.id}`">
        <img :src="favouriate.thumbnail" class="image-default mb-1" />
        </router-link>
        <h4 class="book_title_default">{{favouriate.title}}</h4>
        <h6 class="book_author_default mb-3">{{favouriate.author}}</h6>
       
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      favouriates: localStorage.getItem("popular")
        ? JSON.parse(localStorage.getItem("popular"))
        : []
    };
  },
  mounted() {
    this.favouriate = JSON.parse(localStorage.getItem("popular"));
    
  }
};

/* eslint-enable no-console */
</script>
<style>
  .book_title_default{
    line-height: 40px;
  }
</style>