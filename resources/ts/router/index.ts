import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import SignIn from "../components/SignIn.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/login",
        component: SignIn,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
