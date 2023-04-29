import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '';
  private refreshToken = '';
  private url: string = `${environment.HOST}/`;

  constructor(private http: HttpClient,
    private router: Router) { }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  isLoggedIn() {
    // Comprobar si el token JWT es válido y aún no ha expirado
    return this.token !== '' && this.refreshToken !== '';
  }

  logout() {
    this.token = '';
    this.refreshToken = '';
    this.router.navigate(['/login']);
    console.log("Sesión cerrada");
  }

  //crea un metodo de registro
  register(username:string, name: string, cc: string, password: string){

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = { headers: headers };
    
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('name', name);
    body.set('cc', cc);
    body.set('password', password);
    
    this.http.post<any>('http://localhost:8000/auth/signin', body.toString(), options).subscribe(
      respuesta => {
        console.log("Usuario registrado");
        return respuesta;
      },
      error => {
        console.log("Error al registrar usuario");
        console.log(error);
        return error;
      }
    );
    this.router.navigate(['/login']);
  }

  login(usuario:string, password: string){

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = { headers: headers };

    const body = new URLSearchParams();
    body.set('username', usuario);
    body.set('password', password);

    this.http.post<any>('http://localhost:8000/auth/login', body.toString(), options).subscribe(
      respuesta => {
        const token = respuesta.access_token;
        console.log("Este es el token: " + token);
        const refreshToken = respuesta.refresh_token;
        this.setToken(token);
        this.setRefreshToken(refreshToken);
        console.log("Sesión iniciada");
        return token;
      },
     //si las credenciales son incorrectas
      error => {
        console.log("Acceso denegado");
        return error;
      }
    );
    this.router.navigate(['/home']);
  }

  rol(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getToken());
    return decodedToken.rol;
  }


}
