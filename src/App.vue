<template>
  <div id="nav">
    <a-icon type="menu-unfold" id="menuDrawer" @click="showDrawer" />
    <router-link to="/">
      <h4 id="header">Jointify</h4>
    </router-link>

    <router-link to="/search">
      <a-icon type="search" id="searchButton" />
    </router-link>
    <a-drawer
      headerStyle
      title="Jointify"
      :placement="placement"
      :closable="true"
      @close="onClose"
      :visible="visible"
    >
      <router-link to="/">
        <div class="router-link" @click="onClose">
          <span class="nav-item">
            <b>Home</b>
          </span>
          <br />
          <hr />
        </div>
      </router-link>
      <router-link to="/favoriate">
        <div class="router-link" @click="onClose">
          <span class="nav-item">
            <b>Reading List</b>
          </span>

          <br />
          <hr />
        </div>
      </router-link>
      <router-link to="/team">
        <div class="router-link" @click="onClose">
          <span class="nav-item">
            <b>Meet the team</b>
          </span>

          <br />
        </div>
      </router-link>
    </a-drawer>
    <!-- <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      placement: "left"
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
    }
  }
};
</script>

<style>
/* @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"; */

#menuDrawer {
  font-size: 30px;
  padding: 20px;
}
#header {
  display: inline;
  font-weight: bold;
  margin-left: 30px;
}
a .nav-item {
  line-height: 30px;
  font-size: 20px;
}
.router-link-exact-active {
  opacity: 0.6;
}
#reset-button {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0px 25px 25px 0;
}
#searchButton {
  float: right;
  font-size: 25px;
  padding: 20px;
}
.router-link {
  width: 100%;
  height: 50px;
}
</style>