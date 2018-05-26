import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fuse-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FuseFooterComponent implements OnInit {
  currentDate;
  constructor() {}
  ngOnInit() {
    this.currentDate = new Date();
  }
}
