import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../components/HelloWorld.vue') },
  { path: '/about', component: () => import('../components/TheWelcome.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
