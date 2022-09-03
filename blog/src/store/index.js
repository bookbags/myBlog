import Vuex from "vuex";
import Vue from "vue";
import globalSet from "./modules/globalSet";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        globalSet
    }
});

export default store;