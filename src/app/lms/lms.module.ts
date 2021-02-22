import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';
import { LmsComponent } from './lms.component';


@NgModule({
  declarations: [LmsComponent],
  imports: [
    CommonModule,
    LmsRoutingModule
  ]
})
export class LmsModule { }
