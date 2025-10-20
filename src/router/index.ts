import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminPenal from '@/layouts/quasar-admin/penal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      component: AdminPenal,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import("@/views/DashboardView.vue")
        }
      ]
    }
  ],
})

export default router
