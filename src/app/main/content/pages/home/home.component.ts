import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'fuse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  constructor(
    private fuseConfig: FuseConfigService,
    private adalService: AdalService
  ) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
  }

  ngOnInit() {}

  login() {
    this.adalService.login();
  }
}
