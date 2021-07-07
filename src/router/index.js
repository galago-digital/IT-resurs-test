import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/Home.vue')
    },
    {
        path: '/participants',
        name: 'Participants',
        component: () =>
            import ('@/views/Participants.vue')
    },
    {
        path: '/profile',
        name: 'Profile ',
        component: () =>
            import ('@/views/Profile.vue')
    },
    { path: '*', redirect: '/' }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router