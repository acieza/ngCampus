import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Carta } from 'src/app/pages/local/carta/carta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent  {

  cartas:Carta[]=[];

  constructor(
   private servicioService: ServicioService,
   private router: Router,   
    ) {
      this.cargaCurso();
     /* this.filteredItems = this.cartas;
      console.log(`filtro ${this.filteredItems}`);
      this.init();*/
    }

    cargaCurso(){
      this.servicioService.getAllCurso()
      .subscribe(cartas =>{
        this.cartas = cartas;
        console.log(this.cartas);
        this.filteredItems = this.cartas;
        this.init();
      })
    }
    
    borrarCurso(id:string){
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
          this.servicioService.deleteCurso(id)
          .subscribe( resp =>{
            this.cargaCurso()
            console.log('*****BORRADO*****')
          })
        }
      })
         
        }

    editarCurso(id: string){

     this.router.navigateByUrl(`../Editar/${id}`);
    }
    /************************************************************* */

  filteredItems: Carta[];
  pages: number = 4;
  pageSize: number = 5;
  pageNumber: number = 0;
  currentIndex: number = 1;
  items: Carta[];
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
      this.cartas.forEach(element => {
        if (element.titulo.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    } else {
      this.filteredItems = this.cartas;
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

    

  


  

