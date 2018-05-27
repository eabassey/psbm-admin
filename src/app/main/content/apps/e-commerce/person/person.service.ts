import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PersonService implements Resolve<any> {
  routeParams: any;
  person: any;
  onPersonChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
      Promise.all([this.getPerson()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getPerson(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.routeParams.id === 'new') {
        this.onPersonChanged.next(false);
        resolve(false);
      } else {
        this.http
          .get('api/e-commerce-products/' + this.routeParams.id)
          .subscribe((response: any) => {
            this.person = response;
            this.onPersonChanged.next(this.person);
            resolve(response);
          }, reject);
      }
    });
  }

  savePerson(person) {
    return new Promise((resolve, reject) => {
      this.http
        .post('api/e-commerce-products/' + person.id, person)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  addPerson(person) {
    return new Promise((resolve, reject) => {
      this.http
        .post('api/e-commerce-products/', person)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
