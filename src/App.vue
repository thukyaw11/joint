<template>
  <div id="nav">
      <a-icon type="menu-unfold" id="menuDrawer" @click="showDrawer"/> <h4 id="header">Jointify</h4>
    <a-drawer
      headerStyle
      title="Jointify"
      :placement="placement"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
  
      <router-link to="/"><span @click="onClose" class="nav-item"><b>Home</b></span></router-link><br><hr>
      <router-link to="/article"><span @click="onClose" class="nav-item"><b>Article</b></span></router-link><br><hr>
      <router-link to="/favoriate"><span @click="onClose" class="nav-item"><b>Favouriate</b></span></router-link><hr>
    

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
a .nav-item{
  line-height: 30px;
  font-size: 20px;
}
headerStyle{
  font-size: 50px;
}
</style>