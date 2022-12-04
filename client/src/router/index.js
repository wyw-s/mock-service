import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/interface',
  },
  {
    path: '/project',
    name: '项目列表',
    component: () => import('../pages/Project/index.vue')
  },
  {
    path: '/project/add',
    name: '创建项目',
    component: () => import('../pages/Project/add.vue')
  },
  {
    path: '/interface',
    name: '接口列表',
    component: () => import('../pages/Interface/index.vue')
  },
  {
    path: '/interface/add',
    name: '新增接口',
    component: () => import('../pages/Interface/add.vue')
  },
  { path: '/about', component: () => import('../components/TheWelcome.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
