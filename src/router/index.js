import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/about.vue"),
    },
    {
        path: "/post",
        name: "Post",
        component: () => import("../views/post.vue"),
    },
    {
        path: "/live",
        name: "Live",
        component: () => import("../views/live.vue"),
    },
    {
        path: "/faq",
        name: "FAQ",
        component: () => import("../views/faq.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/contact.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
