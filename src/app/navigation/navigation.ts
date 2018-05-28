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
        id: 'membership',
        title: 'Membership',
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
            id: 'persons',
            title: 'Adult Members',
            type: 'item',
            url: '/apps/e-commerce/products'
            // exactMatch: true
          },
          {
            id: 'youth',
            title: 'Youth Members',
            type: 'item',
            url: '/apps/e-commerce/products2'
            // exactMatch: true
          },
          {
            id: 'children',
            title: 'Children',
            type: 'item',
            url: '/apps/e-commerce/products3'
            // exactMatch: true
          },
          {
            id: 'visitors',
            title: 'Visitors',
            type: 'item',
            url: '/apps/e-commerce/products4'
            // exactMatch: true
          },
          {
            id: 'converts',
            title: 'New Converts',
            type: 'item',
            url: '/apps/e-commerce/products5'
            // exactMatch: true
          },
          {
            id: 'presbyters',
            title: 'Presbyters',
            type: 'item',
            url: '/apps/e-commerce/products6',
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
