import { DenoapiService } from './../denoapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css']
})
export class EnrolleesComponent implements OnInit {

  //Define field to store enrolleeList
  enrolleeList:any[];

  constructor(private denoService:DenoapiService){

  }

  ngOnInit(){
    this.denoService.getEnrollees()
      .subscribe(
        (response:any)=> {
          this.enrolleeList = response;
          console.log("Get Enrollee", response);
        },
        (error:any) => {
          console.log("Get Error", error);
        }
      )
  }


}
