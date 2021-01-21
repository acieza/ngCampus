import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';
import { CartaComponent } from './carta/carta.component';


@NgModule({
  declarations: [LocalComponent, CartaComponent],
  imports: [
    CommonModule,
    LocalRoutingModule
  ]
})
export class LocalModule { }
