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
        icon: 'people',
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
      }
    ]
  },
  {
    id: 'help',
    title: 'Help',
    type: 'group',
    icon: 'pages',
    children: [
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
