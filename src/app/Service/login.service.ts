import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  Loginuser(data:any)
  {
    return this.http.post("https://localhost:44367/api/User/Login",data)
  }
}
