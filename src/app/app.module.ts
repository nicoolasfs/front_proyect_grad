import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { PecesComponent } from './pages/peces/peces.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { environment } from 'src/environments/environments';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function tokenGetter() {
  let tk = sessionStorage.getItem(environment.TOKEN);
  return tk != null ? tk : '';
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    PecesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule,
    JwtModule.forRoot({
      config: {

        tokenGetter: tokenGetter,
        allowedDomains: ['http://127.0.0.1:8000'],
        disallowedRoutes: ['http://127.0.0.1:8000/auth/login']
      }}),
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
