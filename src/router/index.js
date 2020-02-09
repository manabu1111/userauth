import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import Signin from '../components/auth/Signin.vue';
import Signup from '../components/auth/Signup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
