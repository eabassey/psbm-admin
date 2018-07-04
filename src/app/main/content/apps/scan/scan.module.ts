import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { ScannedDetailComponent } from './scanned-detail/scanned-detail.component';
import { ScanService } from './services/scan.service';
import { ScanComponent } from './scan.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScanComponent
  }
  // {
  //   path: 'detail',
  //   component: ScannedDetailComponent
  // }
];
@NgModule({
  declarations: [ScanComponent, ScannedDetailComponent],
  imports: [
    CommonModule,
    ZXingScannerModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [ScannedDetailComponent],
  providers: [ScanService]
})
export class ScanModule {}
