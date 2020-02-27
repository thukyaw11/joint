import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../views/Explore.vue";
import AddNew from "../views/AddNew.vue";
import DefaulttSingle from "../views/DefaulttSingle.vue";

import Search from "../views/Search.vue";
Vue.use(VueRouter); 


const routes = [
  {
    path: "/",
    name: "explore",
    component: Explore
  },
  {
    path: "/team",
    name: "team",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Team.vue")
  },
  {
    path: "/favoriate",
    name: "favoriate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favoriate.vue")
  },
  {
    path: "/viewBlogDefaultt/:id",
    name : "viewBlogDefaultt",
    props : true,
    component : DefaulttSingle
  },
  {
    path: "/search",
    name : "search",
    component : Search
  },
  {
    path: "/addNew",
    name: "addNew",
    component : AddNew
  }

];

const router = new VueRouter({
  mode : 'history',
  routes
});

export default router;
