import Home from "./views/Home.vue";
import Courses from "./views/Courses.vue";
import Details from "./views/Details.vue";

import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
    children: [
      {
        path: "/courses/:slug",
        name: "details",

        component: Details,
       
       
       
      },
    ],
  },

  { path: "/:path(.*)", component: NotFound },
];
