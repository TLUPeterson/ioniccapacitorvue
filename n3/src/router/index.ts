import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PageTwo from '../views/PageTwo.vue';
import ProfilePage from '../views/ProfilePage.vue';
import VrEx from '../views/ArEx.vue';
import testView from '../views/testView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: "/page2",
    component: PageTwo,
  },
  {
    path: "/kanye",
    component: ProfilePage,
  },
  {
    path: "/vr",
    component: VrEx,
  },
  {
    path: "/test",
    component: testView,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
