<template>
  <div class="container pt-5">
    <h2 style="text-align:left;">Blogs</h2>
    <Popular />
    <Single />
    <NavBar/>
    
  </div>
</template>

<script>
import Popular from "../components/Popular";
import NavBar from '../components/NavBar';
import Single from '../components/Single';
export default {
  components: {
    Popular,
    Single,
    NavBar
  }
};
</script>
