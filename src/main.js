import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import Icon from "ant-design-vue/lib/icon";
import Card from "ant-design-vue/lib/card";
import Drawer from "ant-design-vue/lib/drawer";
import SocialSharing from "vue-social-sharing";
import Button from "ant-design-vue/lib/button";
import Input from "ant-design-vue/lib/input";
import NProgress from "vue-nprogress"
import VueRouter from "vue-router";
import Skeleton from "ant-design-vue/lib/skeleton";
import BackTop from "ant-design-vue/lib/back-top";
import VueMarkDown from "vue-markdown";
Vue.config.productionTip = false;
Vue.use(Icon);
Vue.use(Card);
Vue.use(Drawer);
Vue.use(Button);
Vue.use(Input);
Vue.use(NProgress);
Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.use(Skeleton);
Vue.use(BackTop);
Vue.use(VueMarkDown);


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
