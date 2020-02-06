import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import Icon from 'ant-design-vue/lib/icon';

Vue.config.productionTip = false;
Vue.use(Icon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
