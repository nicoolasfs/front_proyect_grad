import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { Usuario } from 'src/app/_model/Usuario';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{

  userData: any;
  displayedColumns: string[] = ['cc', 'fullname', 'role', 'username'];
  dataSource = new MatTableDataSource<Usuario>();

  constructor(private usuarioService: UsuarioService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.usuarioService.obtener().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
      this.userData = data;
      console.log(data);  
    });
  }

}
