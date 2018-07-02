import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdalService } from 'adal-angular4';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private adalService: AdalService, private router: Router) {}
  canActivate() {
    if (this.adalService.userInfo.authenticated) {
      this.router.navigate(['/apps/psbm/dashboard']);
      return false;
    }
    return true;
  }
}
