import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Console } from 'console';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import Swal from 'sweetalert2'


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
    private formBuild: FormBuilder,
    private router: Router
    ) {this.usuarioconToken() }
                       // Comprobar si existe el usuario para entrar en la aplicación  //
    logearUsuario(event: Event){
      event.preventDefault();
    this.authService.login(this.loginForm.value)
    .subscribe(resp =>{
        console.log('******* TODO BIEN ******');
        this.router.navigateByUrl('admin/Cursos')
     }, (err) => {
        console.log(err.error.msg)

                                    // Mensaje modal de error predefinido //
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.msg[0],
        footer: '<a href>Why do I have this issue?</a>'
      })
    });
    }

  usuarioconToken(){
    console.log('Inicio con Token');
    if(localStorage.getItem('token')){
      console.log(this.authService.tokenRol)
      var tokenRol = this.authService.tokenRol.role;
      console.log('**Paso**');
      this.authService.renovarToken();
      if(tokenRol != "user"){
        console.log("1")
        this.router.navigateByUrl('/admin/Cursos');
      }else{
        console.log("2");
        this.router.navigateByUrl('/lms');
      }
    }
  }

}
