import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from '../admin/edit-user/edit-user.component';
import { UserModifyComponent } from '../shared/user-modify/user-modify.component';

import { LmsComponent } from './lms.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';

const routes: Routes = [
  { path: '',
   component: LmsComponent,
   children: [
    {
      path: 'Perfil', component: UserModifyComponent
    },
    {
      path: 'misCursos', component: MisCursosComponent
    },
   ]
  },
 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
