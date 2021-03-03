import { DenoapiService } from './../denoapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollee-details',
  templateUrl: './enrollee-details.component.html',
  styleUrls: ['./enrollee-details.component.css']
})
export class EnrolleeDetailsComponent implements OnInit {

  detailsForm;

  enrolleeDetails;
  constructor(private route:ActivatedRoute, private denoService:DenoapiService, private fb:FormBuilder, private router:Router) { 
    this.detailsForm = this.fb.group({
      //id:[{value:'',disabled:true}],
      //dateOfBirth:[{value:'',disabled:true}],
      id:[''],
      dateOfBirth:[''],
      name:['',Validators.required],
      active:['']
    })
  }

  get name(){
    return this.detailsForm.get('name');
  }

  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("Get an Id", id);

    this.denoService.getEnrolleeDetails(id)
      .subscribe(
        (result:any[])=>{
          this.detailsForm.patchValue({
            id:result["id"],
            dateOfBirth:result["dateOfBirth"],
            name:result["name"],
            active:result["active"]
          })
        },
        (error)=>{
          console.log("Error Occured", error);
        }

      )
    
  }

  confirmMessage:string;
  displayMessage:boolean = false;

  //Define Submit button click event
  onSubmit = () => {
    let id = this.detailsForm.get("id").value;
    let formData = this.detailsForm.value;

    this.denoService.updateEnrollee(id,formData)
      .subscribe(
        (response)=>{
          console.log("Response from Server", response);
          this.displayMessage = true;
          this.confirmMessage = "Enrollee Details Updated Successfully";

          
        },
        (error)=>{
          console.log("Error Occured", error);
          this.displayMessage = true;
          this.confirmMessage = "Error Occured While Updating Enrollee Details";
        }
      )
  }

}
