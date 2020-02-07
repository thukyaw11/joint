<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        ><a-icon type="compass" class="nav_item_icon" /><br /><span
          class="nav_item_text"
          >Explore</span
        ></router-link
      >
      <router-link to="/article"
        ><a-icon type="book" class="nav_item_icon" /><br /><span
          class="nav_item_text"
          >Article</span
        ></router-link
      >
      <router-link to="/favoriate"
        ><a-icon type="heart" class="nav_item_icon" /><br /><span
          class="nav_item_text"
          >Favoriate</span
        ></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: whitesmoke;
}
#nav {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: white;
  width: 100%;
  height: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  position: fixed;
    overflow: hidden;
}
.nav_item_text {
  font-size: 13px;
}
.nav_item_icon {
  font-size: 20px;
}
</style>
