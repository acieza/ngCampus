import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = this.formBuild.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
  })

  constructor(
    private authService: AuthService,
    private formBuild: FormBuilder
    ) { }

    logearUsuario(){

    }

  

}
