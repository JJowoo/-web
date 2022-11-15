import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/index',
        name: 'index',
        component: index
    }
]