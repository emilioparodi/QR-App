import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './qr-generator.html'
})
export class QrGenerator implements OnInit {
  text: string = 'https://google.com';
  qrCodeUrl: string = '';

  ngOnInit() {
    this.generateQR();
  }

  async generateQR() {
    if (!this.text) {
      this.qrCodeUrl = '';
      return;
    }
    try {
      this.qrCodeUrl = await QRCode.toDataURL(this.text, {
        width: 600,
        margin: 2,
        color: {
          dark: '#4f46e5',
          light: '#ffffff'
        }
      });
    } catch (err) {
      console.error('Errore:', err);
    }
  }

  downloadQR() {
    const link = document.createElement('a');
    link.href = this.qrCodeUrl;
    link.download = 'qr-code.png';
    link.click();
  }
}
