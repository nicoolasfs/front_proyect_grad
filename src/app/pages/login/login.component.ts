import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credenciales = {
    username: '',
    password: '',
    scope: '',
    grant_type: 'password'
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  iniciarSesion() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = { headers: headers };

    const body = new URLSearchParams();
    body.set('username', this.credenciales.username);
    body.set('password', this.credenciales.password);
    body.set('scope', this.credenciales.scope);
    body.set('grant_type', this.credenciales.grant_type);

    this.http.post<any>('http://localhost:8000/auth/login', body.toString(), options).subscribe(
      respuesta => {
        const token = respuesta.access_token;
        console.log("Este es el token: " + token);
        const refreshToken = respuesta.refresh_token;
        this.authService.setToken(token);
        this.authService.setRefreshToken(refreshToken);
        console.log("Acceso concedido");
      },
      error => console.log(error)
    );
  }
}
