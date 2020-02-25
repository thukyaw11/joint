<template>
  <div class="container">
    <div class="row">
      <div
        v-for="favouriate in favouriates"
        v-bind:key="favouriate.id"
        id="defalut_container"
        class="col-12 col-sm-4"
      >           
        <router-link :to="`/viewBlogDefaultt/${favouriate.id}`">
          <img :src="favouriate.thumbnail" class="image-default mb-1" />
          <span class="badge badge-primary">{{favouriate.tag}}</span>
        <h4 class="book_title_default">{{favouriate.title}}</h4>
        <h6 class="book_author_default mb-3">{{favouriate.author}}  <span> {{favouriate.minRead}} min read</span> </h6>
        </router-link>
 
        
       
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      favouriates: localStorage.getItem("defaultt")
        ? JSON.parse(localStorage.getItem("defaultt"))
        : []
    };
  },
  mounted() {
    this.favouriate = JSON.parse(localStorage.getItem("defaultt"));
    console.log(this.favouriates);
  
  }
  
};

/* eslint-enable no-console */
</script>
<style>
  .book_title_default{
    line-height: 40px;
  }
  .book_author_default.mb-3{
    display: flex;
    justify-content: space-between;
  }
</style>