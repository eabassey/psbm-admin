import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class ScanService {
  constructor(private store: Store<any>, private router: Router) {}

  init() {}

  getAllBookings() {}
}
