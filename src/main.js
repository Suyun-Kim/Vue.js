import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index.js";

Vue.config.productionTip = false;
export const EventBus = new Vue();

new Vue({
  router,
  store,
  beforeCreate() {
    //this.$store.dispatch('getMemberInfo')
  },
  render: h => h(App)
}).$mount("#app");
