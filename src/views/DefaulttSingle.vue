<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
        <img :src="singleViewDefault.thumbnail" class="single-image mb-3" /> 
        <a-icon type="heart" :style="{ fontSize: '30px', float: 'right' }" @click="addToFav"  :class="[this.singleViewDefault.favouriate?'icon heart':'icon']"/>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" id="blog">
        <h4 class="single-title">{{singleViewDefault.title}}</h4>
        <p class="single-description">{{singleViewDefault.description}}</p>
      </div>
    </div>

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
          <h5 style="float:right">Share article on </h5>

        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Defaultt } from "../content/defaultt";

export default {
  props: ["id"],
  data() {
    return {
      defaultts: Defaultt,
      singleViewDefault: [],
      localId : [],
      prasedID : '',
      description : '',
      itemsArray: localStorage.getItem('value') ? JSON.parse(localStorage.getItem('value')) : [],
    };
  },
  methods : {
    addToFav() {
      if(!this.singleViewDefault.favouriate){
        this.singleViewDefault.favouriate = !this.singleViewDefault.favouriate;
        this.itemsArray.push(this.singleViewDefault);    
        localStorage.setItem("value",JSON.stringify(this.itemsArray));

      }
    }
  },
  mounted() {
    console.log("i am here");
    this.singleViewDefault = this.defaultts[this.$props.id - 1];

        this.localId = localStorage.getItem('value');
        if(this.localId){
        this.prasedID = JSON.parse(this.localId);
      
        this.prasedID.forEach(singleID => {
         
          if(singleID.id == this.singleViewDefault.id){
            this.singleViewDefault.favouriate = true;
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