import { JsonPipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private serve:AdminService) { }

  ErrorMsg:any;

  ngOnInit(): void {
    this.getemprequest()
  }

  Requests:any;

  getemprequest()
  {
    this.serve.EmployeeRequest().subscribe((res)=>
    {
      this.Requests=res
    })
    console.log(this.Requests)
  }

 approve(id:number,data:any)
 {
  console.log(id,data);
  alert("approv this data")
  this.serve.statusapprove(id,data).subscribe((res)=>
  {
    console.log(res)
  })
  window.location.reload();

 }

 reject(id:number,data:any)
 {
  console.log(id,data);
  alert("reject this data")
  this.serve.statusreject(id,data).subscribe((res)=>
  {
    console.log(res)
  })
  window.location.reload();
 }
  

  statusdata:any

}
