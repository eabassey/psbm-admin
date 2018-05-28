import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PersonsService implements Resolve<any> {
  persons: any[];
  onPersonsChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([this.getPersons()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getPersons(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/e-commerce-products').subscribe((response: any) => {
        this.persons = response;
        this.onPersonsChanged.next(this.persons);
        resolve(response);
      }, reject);
    });
  }
}
