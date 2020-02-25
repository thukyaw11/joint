<template>
  <div class="container">
    <h4 class="mb-5"> Reading List</h4>
    <DefaultFav />
        <a-button type="danger" id="reset-button" @click="removeFav">Reset All</a-button>

  </div>
</template>
<script>
import DefaultFav from "../components/DefaultFav";

export default {
  components : {
    DefaultFav
  },
  methods : {
    removeFav() {
      localStorage.clear();
      window.location.reload();
    }
  }
}
</script>
