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
          },
          {
            id: 'youth',
            title: 'Youth Members',
            type: 'item',
            url: '/apps/persons/youth'
            // exactMatch: true
          },
          {
            id: 'children',
            title: 'Children',
            type: 'item',
            url: '/apps/persons/children'
            // exactMatch: true
          },
          {
            id: 'visitors',
            title: 'Visitors',
            type: 'item',
            url: '/apps/persons/visitors'
            // exactMatch: true
          },
          {
            id: 'converts',
            title: 'New Converts',
            type: 'item',
            url: '/apps/persons/converts'
            // exactMatch: true
          },
          {
            id: 'presbyters',
            title: 'Presbyters',
            type: 'item',
            url: '/apps/persons/presbyters',
            exactMatch: true
          }
        ]
      },
      {
        id: 'fixedassets',
        title: 'Fixed Assets',
        translate: 'NAV.ECOMMERCE',
        type: 'collapse',
        icon: 'commute',
        children: [
          {
            id: 'assetList',
            title: 'Assets List',
            type: 'item',
            url: '/'
          },
          {
            id: 'addAsset',
            title: 'Add an Asset',
            type: 'item',
            url: '//'
            // exactMatch: true
          },
          {
            id: 'assetCategories',
            title: 'Asset Categories',
            type: 'item',
            url: '///'
            // exactMatch: true
          },
          {
            id: 'assetLocations',
            title: 'Asset Locations',
            type: 'item',
            url: '////'
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
