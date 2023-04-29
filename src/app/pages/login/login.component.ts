import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  

  constructor(private authService:AuthService,private formBuilder: FormBuilder,private router: Router) 
  { this.buildForm();}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      // this.redireccionar();
    }
  }
  public iniciar(event: Event){
    event.preventDefault();
    if (this.form.valid)
    {
      const token = this.authService.login(this.form.value.user,this.form.value.password)
    /*this.loginService.login('admin','123456').subscribe(data =>{
      //console.log(data);
      //localStorage
      const helper = new JwtHelperService();
 
      const decodedToken = helper.decodeToken(data.access_token);
      const expirationDate = helper.getTokenExpirationDate(data.access_token);
      const isExpired = helper.isTokenExpired(data.access_token);

      sessionStorage.setItem(environment.TOKEN,data.access_token);
    });*/
  }
}

  // private redireccionar(){
  //   if(this.authService.rol() == "Administrador"){
  //     this.router.navigate(['/ubicar']).then(() => { window.location.reload(); });
  //   }else{
  //     this.router.navigate(['/usuario']).then(() => { window.location.reload(); });
  //   }
  // }

  private buildForm(): void{
    this.form = this.formBuilder.group(
      {
        user: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]] 
      });

  }

}