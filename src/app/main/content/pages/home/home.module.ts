import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from '../../../../auth/guards/no-auth.guard';

const routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [NoAuthGuard]
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class HomeModule {}
