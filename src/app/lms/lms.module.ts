import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';
import { LmsComponent } from './lms.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';


@NgModule({
  declarations: [LmsComponent, MisCursosComponent],
  imports: [
    CommonModule,
    LmsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LmsModule { }
