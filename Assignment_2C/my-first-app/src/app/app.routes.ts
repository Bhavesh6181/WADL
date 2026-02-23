import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
  { path: '', component: RegisterComponent },   // 👈 Default page
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
  { path: '**', redirectTo: '' }
];