export const routes = [
  {
    path: '/packages',
    name: 'list-package',
    meta: {
      title: 'Quản lý vận đơn',
    },
    component: () =>
      import(/* webpackChunkName: "package" */ './views/ListPackages.vue'),
  },
  {
    path: '/packages/fba',
    name: 'package-fba',
    meta: {
      title: 'Quản lý đơn hàng FBA',
    },
    component: () =>
      import(/* webpackChunkName: "fba-package" */ './views/ListFbaPackage'),
  },
  {
    path: '/packages/fba/:id',
    name: 'package-fba-detail',
    meta: {
      title: 'Chi tiết đơn hàng FBA',
    },
    component: () =>
      import(
        /* webpackChunkName: "fba-package-detail" */ './views/FbaPackageDetail'
      ),
  },
  {
    path: '/packages/:id',
    name: 'package-detail',
    meta: {
      title: 'Chi tiết đơn hàng',
    },
    component: () =>
      import(/* webpackChunkName: "package" */ './views/PackageDetail'),
  },
]
