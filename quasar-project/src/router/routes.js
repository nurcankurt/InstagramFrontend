import MainLayout from 'layouts/MainLayout.vue'
import LoginLayout from 'layouts/LoginLayout.vue'

const routes = [
  {
    path: '/',
    meta: { layout: MainLayout },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'create', name: 'create', component: () => import('components/CreateContent.vue') }
    ]
  },

  {
    path: '/instagram/',
    meta: { layout: LoginLayout },
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
