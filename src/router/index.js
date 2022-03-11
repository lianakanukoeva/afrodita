import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MainView from '../views/MainView.vue'
import ListsView from '../views/ListsView.vue'
import PreloaderView from '../views/PreloaderView.vue'

const routes = [{
        path: '/',
        name: 'preloader',
        component: PreloaderView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        children: [{
                path: '/main',
                name: 'main',
                component: MainView
            },
            {
                path: '/about',
                name: 'about',
                component: AboutView
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    // component: () =>
                    //     import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
            },
            {
                path: '/lists',
                name: 'lists',
                component: ListsView
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router