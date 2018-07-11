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
  MatTabsModule,
  MatDialogModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesService } from './profiles/profiles.service';
import { EventsDialogComponent } from './profiles/events-dialog/events-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  declarations: [DashboardComponent, ProfilesComponent, EventsDialogComponent],
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
    MatDialogModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,

    NgxChartsModule,

    FuseSharedModule,
    FuseWidgetModule
  ],
  entryComponents: [EventsDialogComponent],
  providers: [DashboardService, ProfilesService]
})
export class PsbmModule {}
