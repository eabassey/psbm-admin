import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import {
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesService } from './profiles/profiles.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      data: DashboardService
    }
  },
  {
    path: 'profiles',
    component: ProfilesComponent,
    resolve: {
      data: ProfilesService
    }
  }
];

@NgModule({
  declarations: [DashboardComponent, ProfilesComponent],
  imports: [
    RouterModule.forChild(routes),

    CdkTableModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,

    NgxChartsModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  providers: [DashboardService, ProfilesService]
})
export class PsbmModule {}
