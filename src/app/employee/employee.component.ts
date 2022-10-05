import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private serve:EmployeeService) {}

  ngOnInit(): void {}

  regForm = new FormGroup({
    Employee_id: new FormControl('', [
      Validators?.required,
      Validators?.minLength(2),
      Validators?.maxLength(10),
      Validators?.pattern('[0-9]+$'),
    ]),

    Employee_mail: new FormControl('', [
      Validators?.required,
      Validators?.minLength(8),
      Validators?.maxLength(100),
      Validators?.pattern('[A-Z,a-z,@,.]+$'),
    ]),

    Furniture: new FormControl(),

    IT_Equipment: new FormControl(),

    Address: new FormControl(),
  });

  idform = new FormGroup({
    empid:new FormControl()
  })

  get id() {
    return this.regForm.get('Employee_id');
  }

  get mail() {
    return this.regForm.get('Employee_mail');
  }

  get furniture() {
    return this.regForm.get('Furniture');
  }

  get ITEquipment() {
    return this.regForm.get('IT_Equipment');
  }

  get Address() {
    return this.regForm.get('Address');
  }

  get empid()
  {
    return this.idform.get('empid')
  }

  register() {
    console.log(this.regForm.value);
    this.serve.addData(this.regForm.value).subscribe((res) => {
      console.log(res);
    });
    alert("Your Request sent Sucessfully")
    this.regForm.reset()
  }
  emprequests:any
  myrequest()
  {
    this.serve.myrequests(this.empid?.value).subscribe((res)=>{
      this.emprequests= res;
      console.log(res)
    })
  }
}
