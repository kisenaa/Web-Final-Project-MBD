const home = [
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('~/pages/home/index.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('~/pages/login/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: () => import('~/pages/dashboard/index.vue'),
  },
];

export default home;
