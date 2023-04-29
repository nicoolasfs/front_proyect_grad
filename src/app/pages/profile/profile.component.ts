import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../_service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    // Llama a la función que hace la petición GET
    this.hacerPeticion();
  }

  hacerPeticion() {
    // Obtiene el token de autenticación almacenado en el servicio AuthService
    const token = this.authService.getToken();

    // Define las cabeceras de la petición HTTP con el token de autenticación Bearer
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Hace la petición GET a la API
    this.http.get<any>('http://127.0.0.1:8000/auth/users/me', { headers: headers }).subscribe(
      respuesta => console.log(respuesta),
      error => console.log(error)
    );
  }
}
