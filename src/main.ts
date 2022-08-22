import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
createApp(App).use(store).use(Toast).use(router).mount("#app");