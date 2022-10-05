import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VendorService } from '../Service/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private vendor:VendorService) { }

  ngOnInit(): void {
    this.myrequest();
  }

  dateform = new FormGroup({
    DelivaryDate:new FormControl(),
  })

  get DelivaryDate()
  {
    return this.dateform.get("DelivaryDate");
  }
  data:any;

  myrequest()
  {
    this.vendor.getdata().subscribe((res)=>{
      this.data=res;
      console.log(res);
    })
  }

  senddate(id:any)
  {
    this.vendor.postdate(id,this.dateform.value).subscribe((res)=>
    {
      console.log(res);
    })
  }

}
