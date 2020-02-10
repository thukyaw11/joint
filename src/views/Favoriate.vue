<template>
<div class="container">
<div class="row">
    <div
      v-for="favouriate in favouriates"
      v-bind:key="favouriate.id"
      id="defalut_container"
      class="col-12 col-sm-4"
    >
        <img :src="favouriate.thumbnail" class="image-default mb-1" />      
      <h3 class="book_title_default">{{favouriate.title}}</h3>
      <h6 class="book_author_default mb-3">{{favouriate.author}}</h6>
      <hr>
    </div>

  </div>
</div>

</template>

<script>
/* eslint-disable no-console */
export default {
  data () {
    return {
      favouriates : localStorage.getItem('value') ? JSON.parse(localStorage.getItem('value')) : [],
    }
  },
  mounted() {
      this.favouriate = JSON.parse(localStorage.getItem('value'));
      console.log(this.favouriate);
  }
}

/* eslint-enable no-console */
</script>
