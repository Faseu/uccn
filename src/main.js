import Vue from "vue";
import App from "./App";
import "normalize.css";
import router from "./router";
import axiosApi from "./api/request.js";
import Notice from "./assets/plugins/message";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
Vue.prototype.$notice = Notice;
Vue.config.productionTip = false;
Vue.use(axiosApi);
new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
}).$mount("#app");
