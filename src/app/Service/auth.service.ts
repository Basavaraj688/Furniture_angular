import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  

  isLoggeIn() {
    if (this.getDetail()){
      return true;
    } else {
      return false;
    }
  }


  logout() {
    const confirmation = confirm('are you want to logout');
    
    if (confirmation) {
      localStorage.clear();
      this.router.navigate(['Home']);
      // window.location.reload();
    }
  }

  
}
