import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'events-dialog',
  templateUrl: 'events-dialog.component.html'
})
export class EventsDialogComponent implements OnInit {
  registeredEvents$: any;
  displayedColumns = ['name'];
  constructor(
    public dialogRef: MatDialogRef<EventsDialogComponent>,
    public db: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.registeredEvents$ = this.db
      .collection('/users')
      .doc(`${this.data.uid}`)
      .collection('/registeredEvents')
      .valueChanges();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
