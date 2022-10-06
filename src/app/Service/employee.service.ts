import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  addData(data: any) {
    console.log('data in service', data);
    return this.http.post('https://localhost:44367/api/EmployeReq', data);
  }

  myrequests(email:any)
  {
    return this.http.get(`https://localhost:44367/emprequest/${email}`)
  }
}
