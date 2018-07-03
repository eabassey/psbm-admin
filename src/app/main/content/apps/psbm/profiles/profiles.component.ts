import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource, SelectionModel } from '@angular/cdk/collections';

import { fuseAnimations } from '@fuse/animations';

import { ProfilesService } from './profiles.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, merge } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { startWith, switchMap, map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'fuse-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  animations: fuseAnimations
})
export class ProfilesComponent implements OnInit {
  displayedColumns = [
    'email',
    'firstName',
    'lastName',
    'gender',
    'country',
    'mobilePhone',
    'paymentStatus'
  ];
  fsSource: FireStoreSource | null;
  data: any[] = [];
  // dataSource = new MatTableDataSource<Partial<any>>(PERSONS);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  selection = new SelectionModel<Partial<any>>(true, []);
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.fsSource = new FireStoreSource(this.db);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.fsSource.getProfiles();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      )
      .subscribe(data => (this.data = data));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    // const numSelected = this.selection.selected.length;
    // const numRows = this.dataSource.data.length;
    // return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // this.isAllSelected()
    //   ? this.selection.clear()
    //   : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

interface UserProfileApi {
  items: any[];
  total_count: number;
}

/** An example database that the data source uses to retrieve data for the table. */
export class FireStoreSource {
  constructor(private db: AngularFirestore) {}

  getProfiles(): Observable<any> {
    // const href = 'https://api.github.com/search/issues';
    // const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page +
    //   1}`;

    // return this.http.get<any>(requestUrl);
    return this.db
      .collection('/users')
      .valueChanges()
      .pipe(tap(console.log));
  }
}

// const PERSONS: Partial<any>[] = [
//   { firstName: 'Yae', lastName: 'Pert' },
//   { firstName: 'Henry', lastName: 'Oduro' }
// ];
