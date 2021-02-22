import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LmsComponent } from './lms.component';

const routes: Routes = [{ path: '', component: LmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
