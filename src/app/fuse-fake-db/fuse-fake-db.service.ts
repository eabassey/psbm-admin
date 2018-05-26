import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProjectDashboardDb } from './dashboard-project';
import { AnalyticsDashboardDb } from './dashboard-analytics';
import { ECommerceFakeDb } from './e-commerce';
import { ContactsFakeDb } from './contacts';
import { ProfileFakeDb } from './profile';
import { FaqFakeDb } from './faq';
import { KnowledgeBaseFakeDb } from './knowledge-base';
import { IconsFakeDb } from './icons';
import { QuickPanelFakeDb } from './quick-panel';

export class FuseFakeDbService implements InMemoryDbService {
  createDb() {
    return {
      // Dashboards
      'project-dashboard-projects': ProjectDashboardDb.projects,
      'project-dashboard-widgets': ProjectDashboardDb.widgets,
      'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

      // E-Commerce
      'e-commerce-dashboard': ECommerceFakeDb.dashboard,
      'e-commerce-products': ECommerceFakeDb.products,
      'e-commerce-orders': ECommerceFakeDb.orders,

      // Contacts
      'contacts-contacts': ContactsFakeDb.contacts,
      'contacts-user': ContactsFakeDb.user,

      // Profile
      'profile-timeline': ProfileFakeDb.timeline,
      'profile-photos-videos': ProfileFakeDb.photosVideos,
      'profile-about': ProfileFakeDb.about,

      // FAQ
      faq: FaqFakeDb.data,

      // Knowledge base
      'knowledge-base': KnowledgeBaseFakeDb.data,

      // Icons
      icons: IconsFakeDb.icons,

      // Quick Panel
      'quick-panel-notes': QuickPanelFakeDb.notes,
      'quick-panel-events': QuickPanelFakeDb.events
    };
  }
}
