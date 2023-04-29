import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../_model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private token = '';
  private refreshToken = '';

  private url: string = `${environment.HOST}/auth/`;

  constructor(private http: HttpClient) { }

  public user() {
    return this.http.get<Usuario[]>(`${this.url}users/me`);
  }

  public signin() {
    return this.http.post<Usuario>(`${this.url}signin`, { username: ' ', name: '', password: ' '});
  }

  }

