import Vue from 'vue'
import Home from '../components/HelloWorld'
import { IonicVueRouter } from '@ionic/vue';


Vue.use(IonicVueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About')
  }
];

// eslint-disable-next-line no-new
const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
