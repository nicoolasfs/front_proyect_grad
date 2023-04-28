import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { PecesComponent } from './pages/peces/peces.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'peces', component: PecesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
