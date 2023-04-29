import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {
  registro = {
    username:  '',
    name:   '',
    cc:   '',
    role:   'Usuario',
    disabled: false,
    password: ''
  };

  constructor(private http: HttpClient) { }

  enviarRegistro() {
    this.http.post('http://localhost:8000/auth/signin', this.registro).subscribe(
      respuesta => console.log(respuesta),
      error => console.log(error)
    );
  }
}
