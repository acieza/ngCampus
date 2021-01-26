import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './core/servicios/auth/auth.service';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/local/local.module').then(m => m.LocalModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule)},
  { path: 'admin', canActivate:[AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
