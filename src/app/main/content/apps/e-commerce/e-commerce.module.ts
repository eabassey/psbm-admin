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
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseEcommerceDashboardComponent } from './dashboard/dashboard.component';
import { EcommerceDashboardService } from './dashboard/dashboard.service';
import { PersonsComponent } from './persons/persons.component';
import { PersonsService } from './persons/persons.service';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person/person.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: FuseEcommerceDashboardComponent,
    resolve: {
      data: EcommerceDashboardService
    }
  },
  {
    path: 'products',
    component: PersonsComponent,
    resolve: {
      data: PersonsService
    }
  },
  {
    path: 'products/:id',
    component: PersonComponent,
    resolve: {
      data: PersonService
    }
  },
  {
    path: 'products/:id/:handle',
    component: PersonComponent,
    resolve: {
      data: PersonService
    }
  }
];

@NgModule({
  declarations: [
    FuseEcommerceDashboardComponent,
    PersonsComponent,
    PersonComponent
  ],
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    }),

    FuseSharedModule,
    FuseWidgetModule
  ],
  providers: [EcommerceDashboardService, PersonsService, PersonService]
})
export class FuseEcommerceModule {}
