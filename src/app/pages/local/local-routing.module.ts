import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalComponent } from './local.component';

const routes: Routes = [{ path: '', component: LocalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalRoutingModule { }
