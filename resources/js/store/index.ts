import Vue from "vue";
import Vuex from "vuex";


// Inject dependecy
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: require("./user").default
    }
});