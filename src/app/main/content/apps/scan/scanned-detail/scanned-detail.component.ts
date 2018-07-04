import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ScanService } from '../services/scan.service';
import { Store } from '@ngrx/store';
// import { ResetDetails } from '../store/actions/ticket.action';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './scanned-detail.component.html',
  styleUrls: ['./scanned-detail.component.css']
})
export class ScannedDetailComponent implements OnInit {
  selectedBooking$: Observable<any>;

  constructor(private scanService: ScanService, private store: Store<any>) {}

  ngOnInit() {
    // this.selectedBooking$ = this.store.select(
    //   state => state.booking.scannedBooking
    // );
  }

  resetDetails() {
    // this.store.dispatch(new ResetDetails());
  }
}
