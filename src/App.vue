<template>
  <div>
    <a-button type="primary" @click="showDrawer">
      <a-icon type="menu-unfold" id="menuDrawer"/>
    </a-button>
    <a-drawer
      title="Basic Drawer"
      :placement="placement"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <router-link to="/">home</router-link><br>
      <router-link to="/article">article</router-link><br>
      <router-link to="/favoriate">fav</router-link>
    </a-drawer>
  <router-view></router-view>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        placement: 'left',
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      onChange(e) {
        this.placement = e.target.value;
      },
    },
  };
</script>

<style>
#menuDrawer{
  font-size: 30px;
  padding: 20px;
}
  
</style>