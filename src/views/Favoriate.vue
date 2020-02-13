<template>
  <div class="container">
    <h4 class="mb-5"> Your Collection ...</h4>
    <DefaultFav />
    <RecommendFav />
    <PopularFav />
    <NewestFav />
        <a-button type="danger" id="reset-button" @click="removeFav">Reset All</a-button>

  </div>
</template>
<script>
import DefaultFav from "../components/DefaultFav";
import RecommendFav from "../components/RecommendFav";
import PopularFav from "../components/PopularFav";
import NewestFav from "../components/NewestFav"
export default {
  components : {
    DefaultFav,
    RecommendFav,
    PopularFav,
    NewestFav
  },
  methods : {
    removeFav() {
      localStorage.clear();
      window.location.reload();
    }
  }
}
</script>
