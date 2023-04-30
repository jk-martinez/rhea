import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App.vue'
import router from './routes.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faBlog, faCheck, faHashtag, faHome, faHourglass, faMusic, faPause, faPlay, faRotateLeft, faStop, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// FontAwesomeIcon global declaration
library.add(faRotateLeft, faHome, faCheck, faPlay, faPause, faStop, faMusic, faVolumeXmark, faBlog, faYoutube, faArrowRight,  faHashtag, faHourglass);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
