import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../views/Explore.vue";
import PopularSingle from "../views/PopularSingle.vue";
import NewestSingle from "../views/NewestSingle.vue";
import DefaulttSingle from "../views/DefaulttSingle.vue";
import RecommendSingle from "../views/RecommendSingle.vue";
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
    path: "/viewBlogPopular/:id",
    name : "viewBlogPopular",
    props: true,
    component: PopularSingle
  },
  {
    path: "/viewBlogNewest/:id",
    name : "viewBlogNewest",
    props: true,
    component: NewestSingle
  },
  {
    path: "/viewBlogRecommend/:id",
    name : "viewBlogRecommend",
    props : true,
    component : RecommendSingle
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
  }

];

const router = new VueRouter({
  routes
});

export default router;
