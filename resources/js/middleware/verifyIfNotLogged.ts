import { Route } from 'vue-router'
import store from "./../store";

export default (_to: Route, _from: Route, next: Next) => {
    // If the user isn't logged will be redirected to index route.
    if(store.getters["user/logged"])
        next("/");
    else
        next();
};