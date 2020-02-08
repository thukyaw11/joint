<template>
  <div class="container">
    <Popular />
    <Recommend />
    <Newest />
  </div>
</template>

<script>
import Popular from "../components/Popular";
import Recommend from '../components/Recommend';
import Newest from '../components/Newest';
export default {
  components: {
    Popular,
    Recommend,
    Newest
  }
};
</script>
