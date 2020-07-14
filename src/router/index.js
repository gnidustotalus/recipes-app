import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/przepisy",
    name: "recipes-index",
    component: () =>
      import(
        /* webpackChunkName: "recipes-index" */ "../views/recipes/Index.vue"
      ),
  },
  {
    path: "/przepisy/tworzenie",
    name: "recipes-create",
    component: () =>
      import(
        /* webpackChunkName: "recipes-create" */ "../views/recipes/Create.vue"
      ),
  },
  {
    path: "/przepisy/:id",
    name: "recipes-edit",
    component: () =>
      import(
        /* webpackChunkName: "recipes-edit" */ "../views/recipes/Edit.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
