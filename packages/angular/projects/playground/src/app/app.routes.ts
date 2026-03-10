import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent),
    path: ''
  }
];
