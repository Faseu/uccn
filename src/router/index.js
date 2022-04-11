import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const _import = (file) => () => import(`@/pages/${file}.vue`);

const routes = [
  {
    path: "/",
    component: _import("Nav1/index"),
  },
  {
    path: "/Nav2",
    component: _import("Nav2/index"),
  },
  {
    path: "/Nav3",
    component: _import("Nav3/index"),
  },
  {
    path: "/Nav4",
    component: _import("Nav4/index"),
  },
  {
    path: "/404",
    component: _import("ErrorPages/404"),
  },
  {
    path: "*",
    redirect: "/",
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
