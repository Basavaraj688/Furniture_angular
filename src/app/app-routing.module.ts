import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { RegisterComponent } from './register/register.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Home',component:HomeComponent},
  {path:'Admin',component:AdminpageComponent},
  {path:"Vendor",component:VendorComponent},
  {path:"Employee",component:EmployeeComponent},
  {path:"Myrequest",component:MyrequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
