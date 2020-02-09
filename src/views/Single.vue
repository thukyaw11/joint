<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
        <img :src="singleView.thumbnail" class="single-image mb-1" />
        <social-sharing
          url="https://jontify.neltify.com/"
          title="The Progressive JavaScript Framework"
          description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
          hashtags="jointify,vuejs"
          twitter-user="vuejs"
          inline-template
        >
          <div>
            <network network="facebook">
              <a-icon type="facebook" :style="{ fontSize: '30px', color: '#08c' , float: 'right' }"/>
            </network>
          </div>
        </social-sharing>
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

