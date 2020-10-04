import Vue from "vue";
import VueAxios from 'vue-axios';
import axios from "axios";

// Implementar configuración de axios.
import "./config/axios";
import "./config/font-awesome";
import router from "./config/router";

// Implementar componente principal de la aplación
import App from "./templates/app.vue";

Vue.use(VueAxios, axios);

new Vue({
    template: "<App />",
    router,
    components: {App}
}).$mount("#app");