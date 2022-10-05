import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  EmployeeRequest()
  {
      return this.http.get("https://localhost:44367/api/Admin");
  }


  statusapprove(id:number,data:any)
  {
      return this.http.put(`https://localhost:44367/api/Admin/${id}`,data);
  }
  statusreject(id:number,data:any)
  {
      return this.http.put(`https://localhost:44367/api/Admin/Reject/${id}`,data);
  }
  
}
