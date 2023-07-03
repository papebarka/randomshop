import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Detail from './views/Detail.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/products/:id",
        name: "product",
        component: Detail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;