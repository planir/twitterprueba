import Vue from "vue";
import VueRouter from 'vue-router';

import index from "./../templates/index.vue";
import login from "./../templates/login.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path: "/",
            component: index
        },
        {
            path: "/login",
            component: login
        }
    ],
    mode   : "history"
});