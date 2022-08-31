import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CachorrosView from "../views/CachorrosView.vue";
import Login from "@/views/Login.vue";
import SignInView from "@/views/SignInView.vue";
import Cadastro from "@/views/Cadastro.vue";
import Carrosel from "@/components/Carrosel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },
        {
          path: "/cadastro",
          name: "cadastro",
          component: Cadastro,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },
      ],
    },
    {
      path: "",
      component: () => import("@/layouts/FullLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/cachorrada",
          name: "cachorros",
          component: CachorrosView,
        },
        {
          path: "/teste",
          name: "carrosel",
          component: Carrosel,
        },
        {
          path: "/comentarios",
          name: "comentarios",
          component: "comentarios",
        },
      ],
    },
  ],
});

export default router;
