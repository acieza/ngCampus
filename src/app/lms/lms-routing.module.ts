import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from '../admin/edit-user/edit-user.component';
import { UserModifyComponent } from '../shared/user-modify/user-modify.component';

import { LmsComponent } from './lms.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { VideosComponent } from './videos/videos.component';

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
    {
      path: 'videos/:id', component: VideosComponent
    },
   ]
  },
 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
