import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ExposPage from "@/views/ExposPage.vue";
import ExposDetails from "@/views/ExpoDetailsPage.vue";
import CollectionsPage from "@/views/CollectionsPage.vue";
import CollectionDetails from "@/views/CollectionDetailsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/expositions",
    name: "Expositions",
    component: ExposPage,
  },
  {
    path: "/expositions/:id",
    name: "Exposition",
    component: ExposDetails,
  },
  {
    path: "/collections",
    name: "Collections",
    component: CollectionsPage,
  },
  {
    path: "/collections/:id",
    name: "Collection",
    component: CollectionDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
