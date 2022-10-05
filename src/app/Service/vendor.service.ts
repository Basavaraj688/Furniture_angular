import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient){}

  getdata()
  {
    return this.http.get("https://localhost:44367/api/Vendor");
  }
   
  postdate(id:number,data:any)
  {
    return this.http.post(`https://localhost:44367/api/Vendor/Date/${id}`,data);
  }
}
