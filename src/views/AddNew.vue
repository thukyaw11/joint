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
        <a-input
          placeholder="eg . https://gbksoft.com/blog/wp-content/uploads/2018/04/6-1-984x555.jpg"
          v-model="thumnnail"
        />
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
      thumnnail: "",
      description: "",
      baseURL: "https://jointapi.now.sh/api/create?",
      favoriate: false,
      minRead: null,
      route : ''
    };
  },
  components: {
    VueEditor
  },
  methods: {
    saveContent() {
      if (
        this.id &&
        this.postTitle &&
        this.postAuthor &&
        this.tag &&
        this.thumnnail &&
        this.description
      ) {
        const api_url = `${this.baseURL}&id=${this.id}&title=${this.postTitle}&author=${this.postAuthor}&thumbnail=${this.thumnnail}&description=${this.description}&favoriate=${this.favoriate}&minRead=${this.minRead}&tag=${this.tag}`;
        console.log(api_url);
        this.postApi(api_url);
        this.route = '/';
      } else {
        alert("Incomplete form submition");
        this.route = '/addNew'
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
</script>