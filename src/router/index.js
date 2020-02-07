import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../views/Explore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "explore",
    component: Explore
  },
  {
    path: "/article",
    name: "article",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Article.vue")
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
    path: "/viewBlog/:id",
    name : "viewBlog",
    props: true,
    component: () => 
      import('../components/Single.vue')
  }

];

const router = new VueRouter({
  routes
});

export default router;
