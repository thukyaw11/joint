<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
        <img :src="singleViewPopular.thumbnail" class="single-image mb-3" /> 
        <a-icon type="heart" :style="{ fontSize: '30px', float: 'right' }" @click="addToFav"  :class="[this.singleViewPopular.favouriate?'icon heart':'icon']"/>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" id="blog">
        <h4 class="single-title">{{singleViewPopular.title}}</h4>
        <p class="single-description">{{singleViewPopular.description}}</p>
      </div>
    </div>

    <social-sharing
      :url="'https://jointfy.netlify.com/#/viewBlogPopular/'+singleViewPopular.id"
      :title="singleViewPopular.title"
      :description="singleViewPopular.description"
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
      singleViewPopular: [],
      localId : [],
      prasedID : '',
      description : '',
      itemsArray: localStorage.getItem('value') ? JSON.parse(localStorage.getItem('value')) : [],
    };
  },
  methods : {
    addToFav() {
      if(!this.singleViewPopular.favouriate){
        this.singleViewPopular.favouriate = !this.singleViewPopular.favouriate;
        this.itemsArray.push(this.singleViewPopular);    
        localStorage.setItem("value",JSON.stringify(this.itemsArray));

      }
    }
  },
  mounted() {
    this.singleViewPopular = this.populars[this.$props.id - 1];
  console.log(this.singleViewPopular.title);
        this.localId = localStorage.getItem('value');
        if(this.localId){
        this.prasedID = JSON.parse(this.localId);
      
        this.prasedID.forEach(singleID => {
         
          if(singleID.id == this.singleViewPopular.id){
            this.singleViewPopular.favouriate = true;
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