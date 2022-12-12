import Home from "./views/Home.vue";
import Courses from "./views/Courses.vue";

import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/courses", name: "Courses", component: Courses },
  { path: "/:path(.*)", component: NotFound },
];
