
const routes = [
  {
    path: '/',
    component: () => import('layouts/boost.vue'),
    children: [
      // { path: '', component: () => import('pages/index.vue') },
      { path: 'main', component: () => import('pages/main.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
