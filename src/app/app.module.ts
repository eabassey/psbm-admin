import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { FuseMainModule } from './main/main.module';
import { AppStoreModule } from './store/store.module';

import { AdalService, AdalGuard, AdalInterceptor } from 'adal-angular4';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    // redirectTo: 'apps/dashboards/analytics',
    pathMatch: 'full'
    // canActivate: [AdalGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'apps',
    loadChildren: './main/content/apps/apps.module#FuseAppsModule'
    // canActivate: [AdalGuard]
  },
  {
    path: 'pages',
    loadChildren: './main/content/pages/pages.module#FusePagesModule'
    // canActivate: [AdalGuard]
  },
  {
    path: 'services',
    loadChildren: './main/content/services/services.module#FuseServicesModule'
    // canActivate: [AdalGuard]
  },
  {
    path: 'components',
    loadChildren:
      './main/content/components/components.module#FuseComponentsModule'
    // canActivate: [AdalGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),
    InMemoryWebApiModule.forRoot(FuseFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    // Fuse Main and Shared modules
    FuseModule.forRoot(fuseConfig),
    FuseSharedModule,

    AppStoreModule,
    FuseMainModule
  ],
  providers: [AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
