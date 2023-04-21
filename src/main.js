import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './components/App.vue'
import router from './routes.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBlog, faCheck, faHome, faMusic, faPause, faPlay, faRotateLeft, faStop, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// FontAwesomeIcon global declaration
library.add(faRotateLeft, faHome, faCheck, faPlay, faPause, faStop, faMusic, faVolumeXmark, faBlog, faYoutube);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
