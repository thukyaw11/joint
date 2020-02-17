<template>
  <div class="row mt-5">
    <div
      v-for="defaultt in defaultts"
      v-bind:key="defaultt.id"
      id="defalut_container"
      class="col-12 col-sm-4"
    >
      <router-link :to="`/viewBlogDefaultt/${defaultt.id}`">
        <img :src="defaultt.thumbnail" class="image-default mb-1" />
      </router-link>
            <span class="badge badge-primary" >{{defaultt.tag}} </span>
      <h4>
        <vue-markdown class="book_title_default" html>{{defaultt.title}}</vue-markdown>
      </h4>

      <h6 class="author_minRead">
        <vue-markdown class="book_author_default mb-3" html>{{defaultt.author}}  </vue-markdown>{{defaultt.minRead}} min read
      </h6>

      <hr />


    </div>

  </div>
</template>
<script>
/* eslint-disable no-console */
import { Defaultt } from "../content/defaultt";
import VueMarkdown from 'vue-markdown';
export default {
  components:{
    VueMarkdown
  },
  data() {
    return {
      defaultts: Defaultt,
      tags : {}
    };
  },
  mounted() {
    this.defaultts.forEach(element => {
      const wordsPerMinute = 600;
      let textLength = element.description.length;
      element.minRead = Math.ceil(textLength/wordsPerMinute);
      

    });

    

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
.book_title_default {
  font-weight: bold;
  line-height: 40px;
}
.author_minRead{
  display: flex;
  justify-content: space-between;
}
.badge.badge-primary{
  margin: 2px;
}
</style>