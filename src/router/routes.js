import Layout from '@/layout'

export default [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    // redirect: '/dashboard/analysis',
    redirect: '/login',
    children: [
      {
        path: '/dashboard/analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/analysis'),
        meta: { title: 'Analysis' }
      },

      {
        path: '/dashboard/monitor',
        name: 'Monitor',
        component: () => import('@/views/dashboard/monitor'),
        meta: { title: 'Monitor' }
      },

      {
        path: '/dashboard/workplace',
        name: 'Workplace',
        component: () => import('@/views/dashboard/workplace'),
        meta: { title: 'Workplace' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form'),
        meta: { title: 'Form' }
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: 'Table' }
      }
    ]
  },

  {
    path: '/list',
    component: Layout,
    redirect: '/list/articles',
    children: [
      {
        path: 'articles',
        name: 'Articles',
        component: () => import('@/views/list/articles'),
        meta: { title: 'Articles' }
      },

      {
        path: 'projects',
        name: 'Projects',
        component: () => import('@/views/list/projects'),
        meta: { title: 'Projects' }
      },

      {
        path: 'applications',
        name: 'Applications',
        component: () => import('@/views/list/applications'),
        meta: { title: 'Applications' }
      }
    ]
  },

  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/basic',
    children: [
      {
        path: 'advanced',
        name: 'Advanced',
        component: () => import('@/views/profile/advanced'),
        meta: { title: 'Advanced' }
      },

      {
        path: 'basic',
        name: 'Basic',
        component: () => import('@/views/profile/basic'),
        meta: { title: 'Basic' }
      }
    ]
  },

  {
    path: '/result',
    component: Layout,
    redirect: '/result/success',
    children: [
      {
        path: 'success',
        name: 'Success',
        component: () => import('@/views/result/success'),
        meta: { title: 'Success' }
      },

      {
        path: 'error',
        name: 'Error',
        component: () => import('@/views/result/error'),
        meta: { title: 'Error' }
      }
    ]
  },

  {
    path: '/account',
    component: Layout,
    redirect: '/account/center',
    children: [
      {
        path: 'center',
        name: 'Center',
        component: () => import('@/views/account/center'),
        meta: { title: 'Center' }
      },

      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/account/settings'),
        meta: { title: 'Settings' }
      }
    ]
  },

  {
    path: '/exception',
    component: Layout,
    redirect: '/exception/404',
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/exception/404')
      },

      {
        path: '500',
        name: '500',
        component: () => import('@/views/exception/500')
      }
    ]
  }
]
