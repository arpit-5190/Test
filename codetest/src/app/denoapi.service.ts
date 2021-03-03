import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DenoapiService {

  //Define the Base url
  public baseUrl = "http://localhost:8080/";
  
  //Define the endpoint
  url = "enrollees";

  constructor(private httpClient: HttpClient) { }

  //Define method to get enrollees
  getEnrollees = () => {
    return this.httpClient.get(this.baseUrl + this.url);
  }

  //Define the method to get Enrollee information
  getEnrolleeDetails = (id) => {
    return this.httpClient.get(this.baseUrl + this.url + '/' + id);
  }

  //Define update method 
  updateEnrollee = (id,detail) => {
    return this.httpClient.put(this.baseUrl+this.url+ '/' + id,detail);
  }
  
}
