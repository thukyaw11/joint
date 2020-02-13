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
        <h3 class="book_title_default">{{favouriate.title}}</h3>
        <h6 class="book_author_default mb-3">{{favouriate.author}}</h6>
       
      </div>
    </div>
        <a-button type="danger" id="reset-button" @click="removeFav">Reset All</a-button>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      favouriates: localStorage.getItem("value")
        ? JSON.parse(localStorage.getItem("value"))
        : []
    };
  },
  mounted() {
    this.favouriate = JSON.parse(localStorage.getItem("value"));
    
  },
  methods : {
    removeFav() {
      localStorage.removeItem("value");
      window.location.reload();
    }
  }
};

/* eslint-enable no-console */
</script>
