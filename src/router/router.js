import home from '@/components/home.vue'
import Index from '../../views/index.vue'

export default [
  {
    path: '/',
    name: 'Root',
    component: home,
    redirect: {
      name: 'Index'
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
        title: '主页'
      }
    ]
  }
]
