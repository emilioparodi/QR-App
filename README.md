# QR-App (Angular 21 + Tailwind CSS)

A modern, lightweight, and open-source web application for real-time **QR code generation** and **scanning**. Built with the latest Angular ecosystem features and fully installable as a **PWA**.

![Angular Version](https://img.shields.io/badge/Angular-21.1.2-DD0031?style=for-the-badge&logo=angular)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-blueviolet?style=for-the-badge&logo=pwa)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## Features

- **Instant QR Generation:** Enter any URL or text and generate a high-resolution QR code instantly.
- **High-Quality Download:** Save generated QR codes as PNG files directly to your device.
- **Live Scanner:** Scan QR codes in real-time using your smartphone camera or webcam.
- **PWA Support:** Install the app on your Home Screen (Android/iOS/Desktop) for a native app-like experience.
- **Dark Mode:** Fully responsive UI with a seamless dark/light theme transition.
- **Performance:** Optimized using Angular 21's new control flow (`@if` / `@for`) and standalone components.

---

## Installation (PWA)

This app is a **Progressive Web App**. You can use it directly in your browser or install it:

- **Android / Chrome:** Click the "Install" button in the app header or the browser menu.
- **iOS (iPhone/iPad):** Tap the **Share** button in Safari and select **"Add to Home Screen"**.
- **Desktop:** Click the install icon in the address bar (Chrome/Edge).

---

## Tech Stack

* **Framework:** [Angular 21.1.2](https://angular.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **PWA:** [@angular/pwa](https://angular.dev/guide/service-worker/getting-started)
* **QR Generation:** [qrcode](https://www.npmjs.com/package/qrcode)
* **QR Scanning:** [@zxing/ngx-scanner](https://www.npmjs.com/package/@zxing/ngx-scanner)
* **Hosting:** [Vercel](https://vercel.com/)

---

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/emilioparodi/qr-app.git](https://github.com/emilioparodi/qr-app.git)
