/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import Vue from "vue";
import axios from "axios"

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Interceptor en caso de que la petición falle.
// Esto con el fin de avisar al usuario cual fue la causa del error.
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
        
    if(error.response && error.response.data) {
        /**
         * Data getted by response.
         * 
         * @var {Object} data
         */
        let data = error.response.data;
        
        if(data.message && data.notify) {
            Vue.notify({
                title : 'Error',
                text  : data.message,
                type  : "error"
            });
        }
        
        // Si hay multiples errores en la petición
        if(data.errors) {

            for(let index in data.errors) {
                /**
                 * Errores conseguidos.
                 * 
                 * @var any[] errors
                 */
                let errors = data.errors[index];
                    
                for(let error of errors){
                    Vue.notify({
                        title : 'Error',
                        text  : error,
                        type  : "error"
                    })
                }
            }
        }
    }
        
    return Promise.reject(error);
});

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token: HTMLMetaElement | null = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}