import Vue from "vue";

// Implementar configuración de axios.
import "./config/axios";
import router from "./config/router";

// Implementar componente principal de la aplación
import App from "./templates/app.vue";

new Vue({
    template: "<App />",
    router,
    components: {App}
}).$mount("#app");