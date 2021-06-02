require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from './store';

import MainLayout from './layouts/MainLayout';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(MainLayout).use(router).use(store).mount('#app');
