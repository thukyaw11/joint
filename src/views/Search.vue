<template>
  <div class="container">
    <a-input-search placeholder="input search text" size="large" v-model="search" id="searchBox" />
    <hr />

    <div
      v-for="blog in filteredBlogs"
      v-bind:key="blog.id"
      id="defalut_container"
      class="col-12 col-sm-4"
    >
      <router-link :to="`/viewBlogDefaultt/${blog.id}`">
        <img :src="blog.thumbnail" class="image-default mb-1" />
      </router-link>
      <h4 class="book_title_default">{{blog.title}}</h4>
      <h6 class="book_author_default mb-3">{{blog.author}}</h6>
      <hr />
    </div>
  </div>
</template>

<script>
import { Newest } from "../content/newest";
import {Defaultt} from "../content/defaultt";
import {Recommend} from "../content/recommended";
import {Popular} from "../content/popular"
/* eslint-disable no-console */

export default {
  data() {
    return {
      newests: Newest,
      defaults : Defaultt,
      recommends : Recommend,
      populars : Popular,
      itemsArray : [],
      search: ""
    };
  },
  computed: {
    filteredBlogs() {
    
    if (this.search !== "") {
        return this.itemsArray[1].filter(blog => {
          return blog.title.match(this.search);
        });
      }

    return this.itemsArray[1];
      
    
    }
  },
  mounted () {
      this.itemsArray.push(this.newests,this.defaults,this.recommends,this.populars);

      document.getElementById("searchBox").focus();


  }
};

/* eslint-enable no-console */
</script>