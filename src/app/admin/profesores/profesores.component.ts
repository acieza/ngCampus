
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  
  usuarios:Usuario[] = [];

  public usuario;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { 
      this.usuario = authService.usuario;
    }

  ngOnInit(): void {
    this.cargaProfesor();
  }

  cargaProfesor(){
    this.authService.getOnlyProfesor()
    .subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(this.usuarios);
      this.filteredItems = this.usuarios;
      this.init();
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
          this.cargaProfesor()
          console.log('*****BORRADO*****')
        })
      }
    })
       
      }

      /****************************************/

  filteredItems: Usuario[];
  pages: number = 3;
  pageSize: number = 4;
  pageNumber: number = 0;
  currentIndex: number = 1;
  items: Usuario[];
  pagesIndex: Array<number>;
  pageStart: number = 1;
  inputName: string = '';

 
  init() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
    if (this.filteredItems.length % this.pageSize != 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
    console.log("this.pageNumber :  " + this.pageNumber);
  }

  FilterByName() {
    this.filteredItems = [];
    if (this.inputName != "") {
      this.usuarios.forEach(element => {
        if (element.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    } else {
      this.filteredItems = this.usuarios;
    }
    console.log(this.filteredItems);
    this.init();
  }
  fillArray(): any {
    var obj = new Array();
    for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }
  refreshItems() {
    this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }
  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }
}

