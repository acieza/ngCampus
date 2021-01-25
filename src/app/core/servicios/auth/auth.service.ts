import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  login(elUser: Login){
    return this.http.post<Login>(`http://localhost:3000/login`,elUser);
  }
}
