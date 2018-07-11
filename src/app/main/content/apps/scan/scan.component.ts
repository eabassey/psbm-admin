import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  ngVersion = VERSION.full;
  scannerEnabled = true;
  autofocusEnabled = true;
  constructor(
    // private scanService: ScanService,
    private store: Store<any>,
    private router: Router
  ) {
    // this.scanService.init();
  }

  @ViewChild('scanner') scanner: ZXingScannerComponent;

  hasCameras = false;
  hasPermission: boolean;
  // qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;

      console.log('Devices: ', devices);
      this.availableDevices = devices;
      this.selectedDevice = devices[0];

      // selects the devices's back camera by default
      // for (const device of devices) {
      //   if (/back|rear|environment/gi.test(device.label)) {
      //     this.scanner.changeDevice(device);
      //     this.selectedDevice = device;
      //     break;
      //   }
      // }
    });

    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      console.error(
        'An error has occurred when trying to enumerate your video-stream-enabled devices.'
      );
    });

    this.scanner.permissionResponse.subscribe((answer: boolean) => {
      this.hasPermission = answer;
    });
  }

  handleQrCodeResult(bookingId: string) {
    // this.store.dispatch(new ticketActions.GetBooking(bookingId));
    // this.router.navigate(['/ticket-detail']);
  }

  onDeviceSelectChange(selectedValue: string) {
    // console.log('Selection changed: ', selectedValue);
    this.selectedDevice = this.scanner.getDeviceById(selectedValue);
  }
}
