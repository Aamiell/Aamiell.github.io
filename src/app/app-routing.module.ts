import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePracticeComponent } from './pages/create-practice/create-practice.component';
import { CvComponent } from './pages/cv/cv.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PracticesComponent } from './pages/practices/practices.component';
import { PrivateComponent } from './pages/private/private.component';
import { PublicComponent } from './pages/public/public.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ModifyPracticeComponent } from './pages/modify-practice/modify-practice.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToHome}},
  {path: 'logout', component: LogoutComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'cv', component: CvComponent},
  {path: 'practices', children: [ 
    {path: '', component: PracticesComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
    {path: ':id', component: DetailComponent}]},
  {path: 'create_practices', component: CreatePracticeComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'modify_practices', children: [ 
      {path: '', component: PracticesComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
      {path: ':id', component: ModifyPracticeComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
