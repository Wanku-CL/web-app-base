import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/auth/auth.layout').then(m => m.AuthLayout)
  },
];
