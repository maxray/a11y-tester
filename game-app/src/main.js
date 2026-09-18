import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const mountPoint = document.getElementById("game-app");
if (mountPoint) {
  createApp(App).use(pinia).mount(mountPoint);
}
