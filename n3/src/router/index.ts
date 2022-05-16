import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PageTwo from '../views/PageTwo.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tasks'
  },
  {
    path: "/tasks",
    component: PageTwo,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
