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
            url: '/apps/persons/dashboard'
          },
          {
            id: 'adults',
            title: 'Adult Members',
            type: 'item',
            url: '/apps/persons/adults'
            // exactMatch: true
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
