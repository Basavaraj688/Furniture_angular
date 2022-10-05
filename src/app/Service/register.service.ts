import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  RegisterUser(data:any)
  {
    return this.http.post("https://localhost:44367/api/User/Register",data);
  }

}
