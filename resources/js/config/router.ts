import Vue from "vue";
import VueRouter from 'vue-router';

import index from "./../templates/index.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path: "/",
            component: index
        }
    ],
    mode   : "history"
});