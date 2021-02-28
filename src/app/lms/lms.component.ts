import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/servicios/auth/auth.service';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.authService.logout()
  }

}
