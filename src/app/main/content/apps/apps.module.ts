import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseAngularMaterialModule } from '../components/angular-material/angular-material.module';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
  {
    path: 'psbm',
    loadChildren: './psbm/psbm.module#PsbmModule'
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
