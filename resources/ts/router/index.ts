import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import LogIn from "../components/LogIn.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/login",
        component: LogIn,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
