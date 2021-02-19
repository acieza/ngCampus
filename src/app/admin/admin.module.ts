import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { CursosComponent } from './cursos/cursos.component';
import { EditarComponent } from './editar/editar.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AnadirComponent } from './anadir/anadir.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CargaComponent } from './carga/carga.component';



@NgModule({
  declarations: [
    AdminComponent, 
    CursosComponent, 
    EditarComponent, 
    UsuariosComponent, 
    ProfesoresComponent, 
    AnadirComponent, EditUserComponent, CargaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
