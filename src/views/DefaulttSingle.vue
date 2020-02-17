<template>
  <div class="container" id="container">
    <a-skeleton :loading="loading" :paragraph="{rows: 15}">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
          <img :src="singleViewDefault.thumbnail" class="single-image mb-3" />
          <span class="badge badge-primary" >{{singleViewDefault.tag}} </span>
          <a-icon
            type="heart"
            :style="{ fontSize: '30px', float: 'right' }"
            @click="addToFav"
            :class="[this.singleViewDefault.favouriate?'icon heart':'icon']"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6" id="blog">
          <h4 class="single-title">{{singleViewDefault.title}}</h4>
          <p class="single-description">
            <vue-markdown html
            >{{singleViewDefault.description}}</vue-markdown>
          </p>
        </div>
      </div>
    </a-skeleton>

    <a-back-top>
      <div class="ant-back-top-inner"><a-icon type="caret-up" :style="{fontSize: '20px'}" /></div>
    </a-back-top>
    <social-sharing
      :url="'https://jointfy.netlify.com/#/viewBlogDefaultt/'+singleViewDefault.id"
      :title="singleViewDefault.title"
      :description="singleViewDefault.description"
      hashtags="jointify,vuejs"
      twitter-user="vuejs"
      inline-template
    >
      <div>
        <network network="facebook">
          <a-icon type="facebook" :style="{ fontSize: '25px', color: '#08c' , float: 'right' }" />
          <h5 style="float:right">Share article on</h5>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Defaultt } from "../content/defaultt";
// import More from '../components/More';
import VueMarkdown from 'vue-markdown';
export default {
  components:{
    VueMarkdown
  },
  props: ["id"],
  data() {
    return {
      defaultts: Defaultt,
      singleViewDefault: [],
      localId: [],
      prasedID: "",
      description: "",
      itemsArray: localStorage.getItem("defaultt")
        ? JSON.parse(localStorage.getItem("defaultt"))
        : [],
      loading: true
    };
  },
  methods: {
    addToFav() {
      if (!this.singleViewDefault.favouriate) {
        this.singleViewDefault.favouriate = !this.singleViewDefault.favouriate;
        this.itemsArray.push(this.singleViewDefault);
        localStorage.setItem("defaultt", JSON.stringify(this.itemsArray));
      }
    }
  },
  mounted() {

    this.singleViewDefault = this.defaultts[this.$props.id - 1];

    this.localId = localStorage.getItem("defaultt");
    if (this.localId) {
      this.prasedID = JSON.parse(this.localId);

      this.prasedID.forEach(singleID => {
        if (singleID.id == this.singleViewDefault.id) {
          this.singleViewDefault.favouriate = true;
        }
      });
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};

/* eslint-enable no-console */
</script>

<style scoped>
.icon.heart {
  color: red;
}
.ant-back-top {
  bottom: 100px;
}
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 25px;
  border-radius: 50%;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>