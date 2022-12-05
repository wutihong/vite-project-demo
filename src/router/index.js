import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * 配置路由
 * @type {[{path: string, component: Promise<*>}]}
 */
const routers = [{
    path: '/login',
    component: import('@/views/login/index.vue')
}];
/**
 * 创建路由
 * @type {Router}
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
});

export default router;