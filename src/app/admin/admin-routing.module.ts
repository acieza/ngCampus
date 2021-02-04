import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavComponent } from '../shared/admin-nav/admin-nav.component';
import { UserModifyComponent } from '../shared/user-modify/user-modify.component';

import { AdminComponent } from './admin.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'Inicio', component:AdminNavComponent
      },
      {
        path: 'Perfil', component:UserModifyComponent
      },
      {
        path: 'Cursos', component: CursosComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
