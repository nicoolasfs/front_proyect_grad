import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private token = '';
  private refreshToken = '';
  

  private url: string = `${environment.HOST}/auth/`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  public obtener(): Observable <any> {

    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    //valida que el usuario este logueado
    if (token == null) {
      this.authService.logout();
    }
    return this.http.get<any>(`${this.url}users/me`, { headers: headers });
  }

}