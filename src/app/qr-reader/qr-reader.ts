import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-qr-reader',
  standalone: true,
  imports: [ZXingScannerModule, RouterLink], // @if è integrato, non serve altro
  templateUrl: './qr-reader.html'
})
export class QrReader {
  allowedFormats = [BarcodeFormat.QR_CODE];
  qrResultString: string = '';
  hasPermission: boolean = true;

  onCodeResult(result: string) {
    this.qrResultString = result;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
}
