import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '';
  private refreshToken = '';

  constructor() { }

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
  }
}
