import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../_service/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    console.log("Iniciamos petición");
    this.usuarioService.user().subscribe(data => {
      console.log(data);
    });
  }
}