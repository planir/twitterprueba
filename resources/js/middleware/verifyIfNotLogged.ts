import { Route } from 'vue-router'
import store from "./../store";

/**
 * Middleware que tiene como función verificar si el usuario no tiene una sesión iniciada para proseguir.
 */
export default (_to: Route, _from: Route, next: Next) => {
    // If the user isn't logged will be redirected to index route.
    if(store.getters["user/logged"])
        next("/");
    else
        next();
};