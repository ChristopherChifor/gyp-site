export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/about",
    label: "about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "About" },
  },
  {
    path: "/aftermarket",
    label: "aftermarket",
    name: "aftermarket",
    component: () => import("@/views/aftermarket/index.vue"),
    meta: { title: "aftermarket" },
  },
  {
    path: "/aftermarket/overview",
    label: "aftermarket/overview",
    name: "aftermarket/overview",
    component: () => import("@/views/aftermarket/overview/index.vue"),
    meta: { title: "aftermarket/overview" },
  },
  {
    path: "/aftermarket/oasis",
    label: "aftermarket/oasis",
    name: "aftermarket/oasis",
    component: () => import("@/views/aftermarket/oasis/index.vue"),
    meta: { title: "aftermarket/oasis" },
  },
  {
    path: "/contact",
    label: "contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "Contact Us" },
  },
];
