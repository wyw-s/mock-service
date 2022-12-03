import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/interface',
  },
  {
    path: '/interface',
    name: '接口列表',
    component: () => import('../pages/Interface.vue')
  },
  { path: '/about', component: () => import('../components/TheWelcome.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
