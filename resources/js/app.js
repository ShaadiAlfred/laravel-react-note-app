require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from './store';
import { createVuetify } from 'vuetify/dist/vuetify';
import 'vuetify/dist/vuetify.css';

import MainLayout from './layouts/MainLayout';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const vuetify = createVuetify();

createApp(MainLayout).use(vuetify).use(router).use(store).mount('#app');
