import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminNavComponent, UserModifyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    AdminNavComponent,
    UserModifyComponent,
  ]
 
})

export class SharedModule { 
  
  
}
