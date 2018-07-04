export const navigation = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'membership',
        title: 'PSBM',
        translate: 'NAV.ECOMMERCE',
        type: 'collapse',
        icon: 'people',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/apps/psbm/dashboard'
          },
          {
            id: 'profiles',
            title: 'Profiles',
            type: 'item',
            url: '/apps/psbm/profiles'
            // exactMatch: true
          }
        ]
      },
      {
        id: 'scan',
        title: 'Code Scanner',
        translate: 'NAV.ECOMMERCE',
        type: 'collapse',
        icon: 'people',
        children: [
          {
            id: 'scann',
            title: 'Scanner',
            type: 'item',
            url: '/apps/scan'
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
