import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Manage',
    component: () => import('../views/Manage.vue'),
    children:[
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/profileedit',
        name: 'ProfileEdit',
        component: () => import('../views/ProfileEdit.vue')
      },
      {
        path: '/setpassword',
        name: 'SetPassword',
        component: () => import('../views/SetPassword.vue')
      },
      {
        path: '/findmate',
        name: 'FindMate',
        component: () => import('../views/FindMate.vue')
      },
      {
        path: '/yourmate',
        name: 'YourMate',
        component: () => import('../views/YourMate.vue')
      },
      {
        path: '/youlike',
        name: 'YouLike',
        component: () => import('../views/YouLike.vue')
      },
      {
        path: 'likeyou',
        name: 'LikeYou',
        component: () => import('../views/LikeYou.vue')
      },
      {
        path: '/messagesent',
        name: 'MessageSent',
        component: () => import('../views/MessageSent.vue')
      },
      {
        path: '/messagereceived',
        name: 'MessageReceived',
        component: () => import('../views/MessageReceived.vue')
      },
      {
        path: '/findevent',
        name: 'Findevent',
        component: () => import('../views/FindEvent.vue')
      },
      {
        path: '/createevent',
        name: 'Createevent',
        component: () => import('../views/CreateEvent.vue')
      },
      {
        path: '/youreventcreated',
        name: 'YourEventCreated',
        component: () => import('../views/YourEventCreated.vue')
      },
      {
        path: '/youreventjoined',
        name: 'YourEventJoined',
        component: () => import('../views/YourEventJoined.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
})

/**
 * 输出对象
 */
export default router;
