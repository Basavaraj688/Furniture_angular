import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.css']
})
export class MyrequestComponent implements OnInit {

  constructor(private emp:EmployeeService) { }

  ngOnInit(): void {
    this.emprequests();
  }
  requestdata:any
  emprequests()
  {
    var details = JSON.parse(localStorage.getItem("userdetails")!)
    console.log(details.email);
    this.emp.myrequests(details.email).subscribe((res)=>{
      this.requestdata=res;
      console.log(res)
    })
  }

}
