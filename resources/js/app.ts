import Vue from "vue";
import VueAxios from 'vue-axios';
import Notifications from 'vue-notification';
import axios from "axios";

// Implementar configuración de axios.
import "./config/axios";
import "./config/font-awesome";
import router from "./config/router";
import store from "./store";

// Implementar componente principal de la aplación
import App from "./templates/app.vue";

Vue.use(VueAxios, axios);
Vue.use(Notifications);

new Vue({
    template: "<App />",
    router,
    store,
    components: {App}
}).$mount("#app");