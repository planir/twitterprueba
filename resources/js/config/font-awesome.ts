import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"; 
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt"; 
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit"; 
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"; 
import { faSave } from "@fortawesome/free-solid-svg-icons/faSave"; 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);
library.add(faSignOutAlt);
library.add(faSearch);
library.add(faSignInAlt);
library.add(faTrash);
library.add(faEdit);
library.add(faTimes);
library.add(faSave);

Vue.component('font-awesome-icon', FontAwesomeIcon);