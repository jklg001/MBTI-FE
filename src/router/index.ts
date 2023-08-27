import { createRouter, createWebHistory } from 'vue-router'
import startPage from '../views/startPage/index.vue'
import personalityTest from '../views/personalityTest/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: startPage,
    }, 
    {
      path: '/startPage',
      redirect:'/'
    },
    {
      path: '/personalityTest',
      name: 'personalityTest',
      component: personalityTest
    }
  ]
})

export default router
