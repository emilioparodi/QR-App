import { Component, signal, Renderer2, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('qr-app');

  isDark = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Controlla se l'utente aveva già scelto la dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDark(true);
    }
  }

  toggleTheme() {
    this.setDark(!this.isDark);
  }

  private setDark(dark: boolean) {
    this.isDark = dark;
    if (dark) {
      this.renderer.addClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
