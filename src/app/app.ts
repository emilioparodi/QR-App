import { Component, signal, Renderer2, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('qr-app');

  isDark = false;
  deferredPrompt: any;
  showInstallBtn = false;
  isIOS = false;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.setDark(true);
      }
      this.checkPlatform();
    }
  }

  private checkPlatform() {
    if (isPlatformBrowser(this.platformId)) {
      this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    }
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(e: any) {
    e.preventDefault();
    this.deferredPrompt = e;
    this.showInstallBtn = true;
  }

  installPWA() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choice: any) => {
      if (choice.outcome === 'accepted') {
        this.showInstallBtn = false;
      }
      this.deferredPrompt = null;
    });
  }

  toggleTheme() {
    this.setDark(!this.isDark);
  }

  private setDark(dark: boolean) {
    this.isDark = dark;
    if (dark) {
      this.renderer.addClass(document.documentElement, 'dark');
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
