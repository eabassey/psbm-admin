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
import { FuseEcommerceProductsComponent } from './products/products.component';
import { EcommerceProductsService } from './products/products.service';
import { FuseEcommerceProductComponent } from './product/product.component';
import { EcommerceProductService } from './product/product.service';

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
    component: FuseEcommerceProductsComponent,
    resolve: {
      data: EcommerceProductsService
    }
  },
  {
    path: 'products/:id',
    component: FuseEcommerceProductComponent,
    resolve: {
      data: EcommerceProductService
    }
  },
  {
    path: 'products/:id/:handle',
    component: FuseEcommerceProductComponent,
    resolve: {
      data: EcommerceProductService
    }
  }
];

@NgModule({
  declarations: [
    FuseEcommerceDashboardComponent,
    FuseEcommerceProductsComponent,
    FuseEcommerceProductComponent
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
  providers: [
    EcommerceDashboardService,
    EcommerceProductsService,
    EcommerceProductService
  ]
})
export class FuseEcommerceModule {}
