import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PageTwo from '../views/PageTwo.vue';
import ProfilePage from '../views/ProfilePage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tasks'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: "/kanye",
    component: ProfilePage,
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
