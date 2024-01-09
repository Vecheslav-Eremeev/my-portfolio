import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Portfolio",
        component: () => import("../components/Portfolio.vue"),
      },
      {
        path: "skills",
        name: "Skills",
        component: () => import("../components/Skills.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
