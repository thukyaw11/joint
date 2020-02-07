<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <img :src="singleView.thumbnail" class="single-image" />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" id="blog">
        <h4 class="single-title">{{singleView.title}}</h4>
        <p class="single-description">{{singleView.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Popular } from "../content/popular";

export default {
  props: ["id"],
  data() {
    return {
      populars: Popular,
      singleView: ""
    };
  },
  mounted() {
    this.singleView = this.populars[this.$props.id - 1];
  }
};

/* eslint-enable no-console */
</script>

<style>
.single-image {
  widows: 100%;
  border-radius: 9px;
}
.single-title{
    font-weight: bold;
}
.single-description{
    text-align: justify;
    font-size: 20px;
    padding: 2px;
}
#blog{
    overflow: hidden;
}
</style>