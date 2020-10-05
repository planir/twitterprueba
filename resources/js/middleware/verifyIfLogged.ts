import { Route } from 'vue-router'
import store from "./../store";
/**
 * Middleware que tiene el fin de verificar si el usuario tiene una sesión iniciada para proseguir.
 */
export default (_to: Route, _from: Route, next: Next) => {
    
    if(store.getters["user/logged"])
        next();
    else
        next("/login");
};