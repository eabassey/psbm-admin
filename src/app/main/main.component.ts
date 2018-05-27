import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';

import { navigation } from 'app/navigation/navigation';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'fuse-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnInit, OnDestroy {
  user: any;
  onConfigChanged: Subscription;
  fuseSettings: any;
  navigation: any;

  @HostBinding('attr.fuse-layout-mode') layoutMode;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private fuseConfig: FuseConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private document: any,
    private adalService: AdalService
  ) {
    this.onConfigChanged = this.fuseConfig.onConfigChanged.subscribe(
      newSettings => {
        this.fuseSettings = newSettings;
        this.layoutMode = this.fuseSettings.layout.mode;
      }
    );

    if (this.platform.ANDROID || this.platform.IOS) {
      this.document.body.className += ' is-mobile';
    }

    this.navigation = navigation;
  }

  ngOnInit() {
    this.user = this.adalService.userInfo;
    console.log(this.user);

    // this.user.token = this.user.token.substring(0, 10) + '...';
  }

  ngOnDestroy() {
    this.onConfigChanged.unsubscribe();
  }

  addClass(className: string) {
    this._renderer.addClass(this._elementRef.nativeElement, className);
  }

  removeClass(className: string) {
    this._renderer.removeClass(this._elementRef.nativeElement, className);
  }
}
