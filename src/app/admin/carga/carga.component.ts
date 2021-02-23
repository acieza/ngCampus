import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CargaCsvService } from 'src/app/core/servicios/cargaCsvUser/carga-csv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private cargaCsv: CargaCsvService,
    private formBuilder: FormBuilder
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.formBuilder.group({
      archivo: [''],
   })
  }

  cargaArchivo(event){
    const file = event.target.files[0];
    this.form.get('archivo').setValue(file);
    console.log(file)
  }

  uploadFile(){
      const formData = new FormData();
      formData.append('archivo',this.form.get('archivo').value);
  
      this.cargaCsv.subirFile(formData)
      .subscribe((resp:any) =>{
       
          console.log(resp.archivo);
      },(err) =>{
       Swal.fire({
         icon:'error',
         title:'Oops...',
         text: err.error.msg,         
       })     
      });
  
    }
// mostrar(event){
//   const archivo = event.target.files[0]
//   console.log(archivo)
// }
}
