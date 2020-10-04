import Vue from "vue";
import VueRouter from 'vue-router';
import verifyIfLogged from "../middleware/verifyIfLogged";
import verifyIfNotLogged from "../middleware/verifyIfNotLogged";

import index from "./../templates/index.vue";
import login from "./../templates/login.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path: "/",
            component: index,
            beforeEnter: verifyIfLogged
        },
        {
            path: "/login",
            component: login,
            beforeEnter: verifyIfNotLogged
        }
    ],
    mode   : "history"
});