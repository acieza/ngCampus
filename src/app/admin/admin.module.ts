import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { CursosComponent } from './cursos/cursos.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [AdminComponent, CursosComponent, EditarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
