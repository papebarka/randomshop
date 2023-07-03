import { createRouter, createWebhistory } from 'vue-router';

import StoreFront from './components/StoreFront.vue';
import DetailPage from './components/DetailPage.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: StoreFront
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;