import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: '/detail',
                name: 'Detail',
                component: () => import('@/views/Detail/index.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

