import { DenoapiService } from './../denoapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-active-enrollees',
  templateUrl: './in-active-enrollees.component.html',
  styleUrls: ['./in-active-enrollees.component.css']
})
export class InActiveEnrolleesComponent implements OnInit {

  //Define the property to store only activeListEnrollee
  inactiveListEnrollee:any[];
  
  constructor(private denoservice:DenoapiService) { }

  ngOnInit() {
    this.denoservice.getEnrollees()
      .subscribe(
        (response:any[])=> {
          this.inactiveListEnrollee = response.filter(item=>item.active === false);
        },
        (error)=>{

        }
      )
  }

}
