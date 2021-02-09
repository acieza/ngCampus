import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { UsuariosService } from 'src/app/core/servicios/usuarios/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];

  public usuario;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { 
      this.usuario = authService.usuario;
    }

  ngOnInit(): void {
    this.cargaUsers();
  }

  cargaUsers(){
    this.authService.getAllUsuarios()
    .subscribe(usuarios =>{
      this.usuarios = usuarios;
    })
  }

  devuelveImgUser(imagen:string){
    let img = "";
    if(imagen == null ){
      img = 'http://localhost:3000/img/user.png';
    }else{
      img = 'http://localhost:3000/img/'+imagen;
    }
    
    return img
  }
  borrarUser(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.authService.deleteUser(id)
        .subscribe( resp =>{
          this.cargaUsers()
          console.log('*****BORRADO*****')
        })
      }
    })
       
      }


}

