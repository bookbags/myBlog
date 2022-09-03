import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "./store";
import "./style/default.less";

store.dispatch("globalSet/getGlobalSet");

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
