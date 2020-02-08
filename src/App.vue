<template>
  <div id="nav">
      <a-icon type="menu-unfold" id="menuDrawer" @click="showDrawer"/> <h4 id="header">Jointify</h4>
    <a-drawer
      title="Jointify"
      :placement="placement"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
  
      <router-link to="/"><span @click="onClose" class="nav-item">home</span></router-link><br>
      <router-link to="/article"><span @click="onClose" class="nav-item">Article</span></router-link><br>
      <router-link to="/favoriate"><span @click="onClose" class="nav-item">Favouriate</span></router-link>
    

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
#header{
  display: inline;
  font-weight: bold;
  margin-left: 30px;
}
.router-link-exact-active{
  font-size: 25px;
 transition: all 0.25s;
 cursor: pointer;
}


</style>