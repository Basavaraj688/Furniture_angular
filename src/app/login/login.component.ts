import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private log:LoginService,private router:Router) { }

  errmsg:any;

  ngOnInit(): void {
  }
   LoginForm = new FormGroup({
    userName: new FormControl("",[Validators?.required]),
    email: new FormControl("",[Validators?.required]),
    password: new FormControl("",[Validators?.required]),

  })

  get userName() {
    return this.LoginForm.get('userName')
    }
    
    get email() {
    return this.LoginForm.get('email')
    }
    
    get password() {
    return this.LoginForm.get('password')
    }
    
    LoginUser()
  {

    this.log.Loginuser(this.LoginForm.value).subscribe((res:any)=>
    {

      if(res.error)
      {
        this.errmsg=res.error
      }
      else
      {
        localStorage.setItem('token',res.token)
        localStorage.setItem('userdetails',JSON.stringify(res))
        if(res.role=="Admin")
        {
          this.router.navigate(['Admin'])
        }
        else if(res.role=="vendor")
        {
          this.router.navigate(['Vendor'])
        }
        else if(res.role=="Employee")
        {
          this.router.navigate(['Myrequest']);
        }
      }
      console.log(res)
      Swal.fire({  
        // position: 'top-end', 
        icon: 'success',  
        title: 'Thank You For loginigin',  
        text: 'Login successfully',  
      })  
      console.log(res.role)
    })
    // console.log(this.LoginForm.value)
  }

}
