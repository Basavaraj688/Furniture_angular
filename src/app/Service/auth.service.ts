import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  getDetail(){
    const userDetails = JSON.parse(localStorage.getItem('userdetails')!);

    if (userDetails){
      return userDetails;
    }
  }

  // isuserlogin()
  // {
  //   const userDetails = JSON.parse(localStorage.getItem('userdetails')!);
  //   console.log(userDetails)
  //   if(userDetails.role=="Employee")
  //   {
  //     return true
  //   }
  //   else
  //   {
  //     return false
  //   }

  // }
  
  isLoggeIn() {
    if (this.getDetail()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    const confiramation = confirm('are you want to logout');
    if (confiramation) {
      localStorage.clear();
      this.router.navigate(['Home']);
    }
  }
}
