import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  addForm = new FormGroup({
    userName: new FormControl("",[Validators?.required]),
    email: new FormControl("",[Validators?.required]),
    password: new FormControl("",[Validators?.required]),
    conpassword:new FormControl("",[Validators?.required]),
    Firstname: new FormControl("",[Validators?.required]),
    Lastname: new FormControl("",[Validators?.required])

  })

  get userName() {
    return this.addForm.get('userName')
    }
    
    get email() {
    return this.addForm.get('email')
    }
    
    get password() {
    return this.addForm.get('password')
    }

    get conpassword()
    {
      return this.addForm.get("conpassword")
    }

    get Firstname() {
    return this.addForm.get('Firstname')
    }
    get Lastname()
    {
      return this.addForm.get("Lastname")
    }
 alert:boolean=false;
 errmsg:any;
  addUser()
  {
   if(this.password?.value == this.conpassword?.value)
   {
    this.reg.RegisterUser(this.addForm.value).subscribe((res)=>{ 
      console.log(res);
      alert("Registered sucessfully");
     
    })
    this.alert=true;
    this.addForm.reset();
    this.router.navigate(['Login']);
   }
   else
   {
    this.errmsg = "Password is not maching please check"
   }
    // console.log(this.addForm.value)
  }
}
