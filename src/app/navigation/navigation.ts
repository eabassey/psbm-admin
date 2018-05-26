export const navigation = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        translate: 'NAV.DASHBOARDS',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/apps/dashboards/analytics'
          },
          {
            id: 'project',
            title: 'Project',
            type: 'item',
            url: '/apps/dashboards/project'
          }
        ]
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        translate: 'NAV.ECOMMERCE',
        type: 'collapse',
        icon: 'shopping_cart',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/apps/e-commerce/dashboard'
          },
          {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/apps/e-commerce/products',
            exactMatch: true
          },
          {
            id: 'productDetail',
            title: 'Product Detail',
            type: 'item',
            url: '/apps/e-commerce/products/1/printed-dress',
            exactMatch: true
          },
          {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '/apps/e-commerce/orders',
            exactMatch: true
          },
          {
            id: 'orderDetail',
            title: 'Order Detail',
            type: 'item',
            url: '/apps/e-commerce/orders/1',
            exactMatch: true
          }
        ]
      },
      {
        id: 'contacts',
        title: 'Contacts',
        translate: 'NAV.CONTACTS',
        type: 'item',
        icon: 'account_box',
        url: '/apps/contacts'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'pages',
    children: [
      {
        id: 'errors',
        title: 'Errors',
        type: 'collapse',
        icon: 'error',
        children: [
          {
            id: '404',
            title: '404',
            type: 'item',
            url: '/pages/errors/error-404'
          },
          {
            id: '500',
            title: '500',
            type: 'item',
            url: '/pages/errors/error-500'
          }
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        type: 'item',
        icon: 'build',
        url: '/pages/maintenance'
      },
      {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        icon: 'person',
        url: '/pages/profile'
      },
      {
        title: 'Faq',
        type: 'item',
        icon: 'help',
        url: '/pages/faq'
      },
      {
        title: 'Knowledge Base',
        type: 'item',
        icon: 'import_contacts',
        url: '/pages/knowledge-base'
      }
    ]
  }
];
