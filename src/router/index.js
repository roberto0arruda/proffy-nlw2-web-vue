import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "@/views/Landing";
import Study from "@/views/TeacherList.vue";
import GiveClasses from "@/views/TeacherForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/study",
    name: "Study",
    component: Study
  },
  {
    path: "/give-classes",
    name: "GiveClasses",
    component: GiveClasses
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
