import { NgModule } from '@angular/core';

import { Error404Module } from './errors/404/error-404.module';
import { Error500Module } from './errors/500/error-500.module';
import { MaintenanceModule } from './maintenance/maintenence.module';
import { ProfileModule } from './profile/profile.module';
import { FaqModule } from './faq/faq.module';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module';

@NgModule({
  imports: [
    // Errors
    Error404Module,
    Error500Module,

    // Maintenance
    MaintenanceModule,

    // Profile
    ProfileModule,

    // Faq
    FaqModule,

    // Knowledge base
    KnowledgeBaseModule
  ]
})
export class FusePagesModule {}
