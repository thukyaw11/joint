<template>
  <div class="addNewForm p-4">
    <a-form layout="vertical">
      <a-form-item label="Post Title">
        <a-input placeholder="Title Here" v-model="postTitle" />
      </a-form-item>
      <a-form-item label="Author">
        <a-input placeholder="Author Here" v-model="postAuthor" />
      </a-form-item>
      <a-form-item label="Image Url">
        <vue-core-image-upload
          :class="['btn', 'btn-primary']"
          :crop="false"
          v-model="thumbnail"
          :max-file-size="5242880"
          url="https://jointapi.now.sh/api/read"
        ></vue-core-image-upload>
      </a-form-item>
      <a-form-item label="Post here">
        <vue-editor v-model="description"></vue-editor>
      </a-form-item>
      <a-form-item label="Tag">
        <a-input placeholder="eg . education" v-model="tag" />
      </a-form-item>
    </a-form>
    <router-link :to="`${route}`">
      <a-button type="primary" class="float-right" @click="saveContent">Save Content</a-button>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable no-console */

import VueCoreImageUpload from "vue-core-image-upload";
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  data() {
    return {
      items: "",
      id: "",
      postTitle: "",
      postAuthor: "",
      tag: "",
      thumbnail: "",
      nullThumbnail : 'https://www.seekpng.com/png/detail/799-7999694_custom-software-development-custom-development-icon.png',
      description: "",
      baseURL: "https://jointapi.now.sh/api/create?",
      favoriate: false,
      minRead: "",
      route: ""
    };
  },
  components: {
    VueEditor,
    "vue-core-image-upload": VueCoreImageUpload
  },
  methods: {
    saveContent() {
      if (
        this.id &&
        this.postTitle &&
        this.postAuthor &&
        this.tag &&
        this.description
      ) {
        const wordsPerMinute = 600;
        let textLength = this.description.length;
        this.minRead = Math.ceil(textLength / wordsPerMinute);
        console.log(this.minRead);
        const api_url = `${this.baseURL}&id=${this.id}&title=${this.postTitle}&author=${this.postAuthor}&thumbnail=${this.nullThumbnail}&description=${this.description}&favoriate=${this.favoriate}&minRead=${this.minRead}&tag=${this.tag}`;
        console.log(api_url);
        this.postApi(api_url);
        this.route = "/";
        
      } else {
        alert("Incomplete form submition");
        this.route = "/addNew";
      }
    },
    async postApi(url) {
      await axios
        .post(url)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    setData(data) {
      this.items = data;
      this.id = this.items.length + 1;
    }
  },
  mounted() {

    console.log(this.thumbnail);
    axios
      .get("https://jointapi.now.sh/api/read")
      .then(res => {
        const slicedData = res.data.slice().reverse();
        this.setData(slicedData);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

/* eslint-enable no-console */
</script>