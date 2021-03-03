import { DenoapiService } from './../denoapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-enrollees',
  templateUrl: './active-enrollees.component.html',
  styleUrls: ['./active-enrollees.component.css']
})
export class ActiveEnrolleesComponent implements OnInit {

  //Define the property to store only activeListEnrollee
  activeListEnrollee:any[];

  constructor(private denoService:DenoapiService) { }

  ngOnInit() {
    this.denoService.getEnrollees()
      .subscribe(
        (response:any)=>{
          this.activeListEnrollee = response.filter(item => item.active === true);
          console.log(this.activeListEnrollee);
        },
        (error) => {

        }
      )
  }

}
