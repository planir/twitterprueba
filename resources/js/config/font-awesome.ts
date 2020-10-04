import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"; 
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt"; 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);
library.add(faSignOutAlt);
library.add(faSearch);
library.add(faSignInAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);