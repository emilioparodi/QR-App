import { Routes } from '@angular/router';
import { Home } from './home/home';
import { QrGenerator } from './qr-generator/qr-generator';
import { QrReader } from './qr-reader/qr-reader';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'qr-generator', component: QrGenerator },
  { path: 'qr-reader', component: QrReader },
];
