import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {


  public usuario;

  id = "";
  listado: Curso[] = []


  constructor(
    private authService: AuthService,
  ) {
    this.usuario = this.authService.usuario;
    //console.log(this.listado)
  }

  ngOnInit(): void {
    this.cargaCursoAlum(this.usuario._id)
  }

  cargaCursoAlum(id: string) {
    this.authService.getCursoPopu(id).subscribe(
      resp => {
        this.listado = resp.cursos;
        console.log(this.listado)
        this.filteredItems = this.listado
        this.init();
      }, (err) => {
        console.log(err.error.msg);
      }
    )
  }
  /**************************************/

  filteredItems: Curso[];
  pages: number = 4;
  pageSize: number = 6;
  pageNumber: number = 0;
  currentIndex: number = 1;
  items: Curso[];
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
      this.listado.forEach(element => {
        if (element.titulo.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    } else {
      this.filteredItems = this.listado;
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