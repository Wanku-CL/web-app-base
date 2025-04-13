import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth/auth.layout').then(m => m.AuthLayout),
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./pages/auth/sign-in/sign-in.page').then(m => m.SignInPage)
      },
      {
        path: 'sign-out',
        loadComponent: () => import('./pages/auth/sign-out/sign-out.page').then(m => m.SignOutPage)
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/auth/sign-up/sign-up.page').then(m => m.SignUpPage)
      },
      {
        path: 'recovery-password',
        loadComponent: () => import('./pages/auth/recovery/recovery.page').then(m => m.RecoveryPage),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./pages/auth/reset-password/reset-password.page').then(m => m.ResetPasswordPage)
      }
    ]
  }
];
