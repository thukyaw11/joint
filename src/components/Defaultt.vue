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
        <span class="badge badge-primary">{{defaultt.tag}}</span>
        <h4>
          <vue-markdown class="book_title_default" html>{{defaultt.title}}</vue-markdown>
        </h4>
      </router-link>

      <h6 class="author_minRead">
        <vue-markdown class="book_author_default mb-3" html>{{defaultt.author}}</vue-markdown>
        {{defaultt.minRead}} min read
      </h6>

      <hr />
    </div>
    <router-link to="/addNew">
      <a-button type="primary" id="addNew_btn">Add New</a-button>
    </router-link>
  </div>
</template>
<script>
/* eslint-disable no-console */
import axios from "axios";
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      defaultts: null,
      tags: {}
    };
  },
  mounted() {
    axios
      .get("https://jointapi.now.sh/api/read")
      .then(res => {
       const slicedData = res.data.slice().reverse();
        this.displayData(slicedData);
      })
      .catch(error => {
        console.log(error);
      });

    
  },
  methods: {
    displayData(data) {
      this.defaultts = data;
      console.log(this.defaultts);
    }
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
.author_minRead {
  display: flex;
  justify-content: space-between;
}
.badge.badge-primary {
  margin: 2px;
}
#addNew_btn{
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>