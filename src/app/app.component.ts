import { Component, OnInit } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public flagProgressBar: boolean = true;
  timedOut = false;
  lastPing?: Date;
  public flagDialog : boolean = true;
  constructor(public authService: AuthService, private router: Router, public dialog: MatDialog) {
    // this.inactividad();
  }

  // inactividad(){
  //   if (this.authService.isLoggedIn()) {
  //     // this.idle.setIdle(10*60); //tiempo de inactividad en minutos
  //     // this.idle.setTimeout(5*60); //tiempo añadido que tiene el usuario cuando se acabe el tiempo de inactividad
  //     // this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

  //     // this.idle.onIdleEnd.subscribe(() => {
  //     //   this.reset();
  //     });

  //     this.idle.onTimeout.subscribe(() => {
  //       this.timedOut = true;
  //       this.authService.logout();
  //       // this.openDialog();
  //     });

  //     this.keepalive.interval(15);
  //     this.keepalive.onPing.subscribe(() => this.lastPing = new Date());
  //     this.reset();
  //   }
  // }

  // openDialog() {
  //   let dialogRef = this.dialog.open(InactividadDialogComponent, {
  //    width: '30%'
  //  });
  // }

  // reset() {
  //   this.idle.watch();
  //   this.timedOut = false;
  // }

  public log!: boolean;

  ngOnInit(): void {
    this.log = this.authService.isLoggedIn();
  }
  public cerrarSesion(): void {
    if(confirm("Desea salir del aplicativo?")){
      this.authService.logout();
    }
  }
}