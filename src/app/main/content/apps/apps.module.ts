import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseAngularMaterialModule } from '../components/angular-material/angular-material.module';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
  {
    path: 'dashboards/analytics',
    loadChildren:
      './dashboards/analytics/analytics.module#FuseAnalyticsDashboardModule'
  },
  {
    path: 'dashboards/project',
    loadChildren:
      './dashboards/project/project.module#FuseProjectDashboardModule'
  },
  {
    path: 'e-commerce',
    loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#FuseContactsModule'
  }
];

@NgModule({
  imports: [
    FuseSharedModule,
    RouterModule.forChild(routes),
    FuseAngularMaterialModule
  ],
  declarations: []
})
export class FuseAppsModule {}
