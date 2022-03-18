import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/display/:_id',
        name: 'display',
        component: () => import('../views/display.vue')
    },
    {
        path: '/addNewPost',
        name: 'NewPost',
        component: () => import('../views/NewPost')
    }
]

const router = new VueRouter({
    routes
})

export default router
