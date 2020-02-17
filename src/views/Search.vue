<template>
  <div class="container">
    <a-input-search placeholder="input search text" size="large" v-model="search" id="searchBox" />
    <br />
    <p>Search keyword :</p>
    <a-tag @click="clickSearch('programming')">programming</a-tag>
    <a-tag @click="clickSearch('lifestyle')">lifestyle</a-tag>
    <a-tag @click="clickSearch('love')">love</a-tag>
    <a-tag @click="clickSearch('social')">social</a-tag>
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
      <span class="badge badge-primary">{{blog.tag}}</span>
      <h4 class="book_title_default">{{blog.title}}</h4>
      <h6 class="book_author_default mb-3">{{blog.author}}</h6>
      <hr />
    </div>
  </div>
</template>

<script>
import { Defaultt } from "../content/defaultt";

/* eslint-disable no-console */

export default {
  data() {
    return {
      defaults: Defaultt,
      search: "",
      query: ""
    };
  },
  computed: {
    filteredBlogs() {
      if (
        this.search !== "" &&
        this.search != "programming" &&
        this.search != "lifestyle" &&
        this.search != "love" &&
        this.search != "social"
      ) {
        return this.defaults.filter(blog => {
          return blog.title.toLowerCase().match(this.search);
        });
      } else if (
        this.search == "programming" ||
        this.search == "lifestyle" ||
        this.search == "love" ||
        this.search == "social"
      ) {
        return this.defaults.filter(blog => {
          return blog.tag.toLowerCase().match(this.search);
        });
      }

      return this.defaults;
    }
  },
  methods: {
    clickSearch(query) {
      this.search = query;
    }
  },
  mounted(){
    document.getElementById('searchBox').focus();
  }
};

/* eslint-enable no-console */
</script>