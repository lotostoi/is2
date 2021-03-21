import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
import Vuelidate from "vuelidate";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

=======
//import { VuelidatePlugin } from "@vuelidate/core";
>>>>>>> 72ae8775d0b2d54cc1631d7e9f4ae07b306755af


createApp(App)
  .use(store)
  .use(router)
  //.use(VuelidatePlugin)
  .mount("#app");
