<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
        <img :src="singleViewRecommend.thumbnail" class="single-image mb-3" /> 
        <a-icon type="heart" :style="{ fontSize: '30px', float: 'right' }" @click="addToFav"  :class="[this.singleViewRecommend.favouriate?'icon heart':'icon']"/>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" id="blog">
        <h4 class="single-title">{{singleViewRecommend.title}}</h4>
        <p class="single-description">{{singleViewRecommend.description}}</p>
      </div>
    </div>

    <social-sharing
      :url="'https://jointfy.netlify.com/#/viewBlogNewest/'+singleViewRecommend.id"
      :title="singleViewRecommend.title"
      :description="singleViewRecommend.description"
      hashtags="jointify,vuejs"
      twitter-user="vuejs"
      inline-template
    >
      <div>
        <network network="facebook">
          <a-icon type="facebook" :style="{ fontSize: '25px', color: '#08c' , float: 'right' }" />
          <h5 style="float:right">Share article on </h5>

        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Recommend } from "../content/recommended";

export default {
  props: ["id"],
  data() {
    return {
      recommends : Recommend,
      singleViewRecommend: [],
      localId : [],
      prasedID : '',
      description : '',
      itemsArray: localStorage.getItem('recommend') ? JSON.parse(localStorage.getItem('recommend')) : [],
    };
  },
  methods : {
    addToFav() {
      if(!this.singleViewRecommend.favouriate){
        this.singleViewRecommend.favouriate = !this.singleViewRecommend.favouriate;
        this.itemsArray.push(this.singleViewRecommend);    
        localStorage.setItem("recommend",JSON.stringify(this.itemsArray));

      }
    }
  },
  mounted() {
    this.singleViewRecommend = this.recommends[this.$props.id - 1];

        this.localId = localStorage.getItem('recommend');
        if(this.localId){
        this.prasedID = JSON.parse(this.localId);
      
        this.prasedID.forEach(singleID => {
         
          if(singleID.id == this.singleViewRecommend.id){
            this.singleViewRecommend.favouriate = true;
          }    
        });

          }

  }
};

/* eslint-enable no-console */
</script>

<style>

.icon.heart{
    color: red;
}
  
</style>