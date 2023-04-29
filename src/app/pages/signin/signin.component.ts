import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent{

  form!: FormGroup;

  constructor(private authService:AuthService,private formBuilder: FormBuilder,private router: Router) 
  { this.buildForm();}

  
  public iniciar(event: Event){
    event.preventDefault();
    if (this.form.valid)
    {
      const token = this.authService.register(this.form.value.username,this.form.value.name,this.form.value.cc,this.form.value.password)
  }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]] ,
        cc: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]] 
      });

  }

}


 
