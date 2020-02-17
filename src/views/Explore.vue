<template>

  <div class="container">
    <!-- <a-input-search placeholder="input search text" style="width: 100%" v-model="search" class="mb-3"/> -->
    <Defaultt />
    <a-back-top>
      <div class="ant-back-top-inner"><a-icon type="caret-up" :style="{fontSize: '20px'}" /></div>
    </a-back-top>
  </div>
</template>

<script>

import Defaultt from '../components/Defaultt'
export default {
  components: {
    Defaultt
  },
  data () {
    return {
      search : ""
    } 
  }
};
</script>
<style>
.ant-back-top {
  bottom: 100px;
}
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 25px;
  border-radius: 50%;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.single-image {
  width: 100%;
  border-radius: 9px;
}
.single-title{
    font-weight: bold;
}
.single-description{
  
    font-size: 23px;
}
#blog{
    overflow: hidden;
}
.scrollMenu {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
}
.scrollMenu::-webkit-scrollbar {
  display: none;
}
.image {
  height: 180px;
  width: 160px;
  margin: 5px;
  border-radius: 6px;
  cursor: pointer;
}
.book_title {
  font-weight: bold;
  padding: 9px 9px 0 9px;
  cursor: pointer;
  text-align: left;
}
.book_author {
  text-align: left;
  padding: 0 9px 0 9px;
  float: left;
}
.image:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  transition: 1s;
}

</style>