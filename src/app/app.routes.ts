import { Routes } from '@angular/router';
import { ChangePasswordComponent } from './core/auth/components/change-password/change-password.component';
import { ForgotPasswordComponent } from './core/auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/pages/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page',
      },
      { path: 'login', component: LoginComponent, title: 'Register Page' },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password Page',
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'Change Password Page',
      },
    ],
  },
];
