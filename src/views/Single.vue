<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
        <img :src="singleView.thumbnail" class="single-image mb-3" /> 
        <a-icon type="heart" :style="{ fontSize: '30px', float: 'right' }" @click="addToFav"  :class="[this.singleView.favouriate?'icon heart':'icon']"/>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" id="blog">
        <h4 class="single-title">{{singleView.title}}</h4>
        <p class="single-description">{{singleView.description}}</p>
      </div>
    </div>

    <social-sharing
      :url="'https://jointfy.netlify.com/#/viewBlog/'+singleView.id"
      :title="singleView.title"
      :description="singleView.description"
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
import { Popular } from "../content/popular";

export default {
  props: ["id"],
  data() {
    return {
      populars: Popular,
      singleView: [],
      localId : [],
      prasedID : '',
      description : '',
      itemsArray: localStorage.getItem('value') ? JSON.parse(localStorage.getItem('value')) : [],
    };
  },
  methods : {
    addToFav() {
      if(!this.singleView.favouriate){
        this.singleView.favouriate = !this.singleView.favouriate;
        this.itemsArray.push(this.singleView);    
        localStorage.setItem("value",JSON.stringify(this.itemsArray));

      }
    }
  },
  mounted() {
    this.singleView = this.populars[this.$props.id - 1];

        this.localId = localStorage.getItem('value');
        if(this.localId){
        this.prasedID = JSON.parse(this.localId);
      
        this.prasedID.forEach(singleID => {
         
          if(singleID.id == this.singleView.id){
            this.singleView.favouriate = true;
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