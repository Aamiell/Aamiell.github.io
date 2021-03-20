import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { PracticesComponent } from './pages/practices/practices.component';
import { CreatePracticeComponent } from './pages/create-practice/create-practice.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { ModifyPracticeComponent } from './pages/modify-practice/modify-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    PracticesComponent,
    CreatePracticeComponent,
    DetailComponent,
    LoginComponent,
    LogoutComponent,
    PublicComponent,
    PrivateComponent,
    ModifyPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment. firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
