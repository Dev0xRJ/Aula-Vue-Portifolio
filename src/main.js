import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faVuejs, 
  faJsSquare, 
  faPython, 
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faBootstrap,
  faDocker,
  faFigma,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase,
  faExchangeAlt,
  faLaptopCode,
  faCertificate,
  faExternalLinkAlt,
  faMobileAlt,
  faNetworkWired,
  faShieldAlt,
  faTrophy
} from '@fortawesome/free-solid-svg-icons'

// Adicionar ícones à biblioteca
library.add(
  faVuejs, 
  faJsSquare, 
  faPython, 
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faBootstrap,
  faDocker,
  faFigma,
  faGithub,
  faDatabase,
  faExchangeAlt,
  faLaptopCode,
  faCertificate,
  faExternalLinkAlt,
  faMobileAlt,
  faNetworkWired,
  faShieldAlt,
  faTrophy
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
