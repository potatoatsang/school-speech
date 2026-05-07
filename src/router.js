import { createRouter, createWebHistory } from "vue-router";
import NetflixHome from "./components/NetflixHome.vue";
import NetflixPlayer from "./components/NetflixPlayer.vue";

const routes = [
  { path: "/", component: NetflixHome },
  { path: "/player", component: NetflixPlayer },
];

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/school-speech/" : "",
  ),
  routes,
});

export default router;
