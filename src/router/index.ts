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
                path: '/detail/xbox-game-pass-ultimate',
                name: 'Detail-xbox-game-pass-ultimate',
                component: () => import('@/views/Detail/xbox-game-pass-ultimate.vue'),
            },
            {
                path: '/detail/playstation-plus-extra',
                name: 'Detail-playstation-plus-extra',
                component: () => import('@/views/Detail/playstation-plus-extra.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

