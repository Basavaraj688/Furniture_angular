import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

 


  rolebasednav()
  {
    const userDetails = JSON.parse(localStorage.getItem('userdetails')!);
    // console.log(userDetails.role);
    if(userDetails.role=="Employee")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  adminlogin()
  {

    const userDetails = JSON.parse(localStorage.getItem('userdetails')!);
    // console.log(userDetails.role);
    if(userDetails.role=="Admin")
    {
      return true;
    }
    else
    {
      return false;
    }

  }


  username:any;
  email:any;
  role:any;
  // profiledata()
  // {
  
  // }

  menutoogle()
  {
    const toogleMenu = document.querySelector('.menu');
    toogleMenu?.classList.toggle('active')
    const userDetails = JSON.parse(localStorage.getItem('userdetails')!);
    this.username = userDetails.userName;
    this.email = userDetails.email;
    this.role = userDetails.role
    console.log(this.username,this.email)
  }

  logout()
  {
   this.auth.logout()
  }
}
