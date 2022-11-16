import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
import home from '../views/home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: home
        },
        {
            path: '/index',
            name: index
        }
    ]
})

/*
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },

    {
        path: '/index',
        name: 'index',
        component: index
    }
]*/