<template>
  <div class="container pt-5">
    <h2 style="text-align:left;">Blogs</h2>
    <Popular />
    <Single />
  </div>
</template>

<script>
import Popular from "../components/Popular";
import Single from '../components/Single';
export default {
  components: {
    Popular,
    Single
  }
};
</script>
