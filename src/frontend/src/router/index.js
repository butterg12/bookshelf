import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Bookshelf from "@/views/Bookshelf";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/bookshelf',
        name: 'bookshelf',
        component: Bookshelf
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router