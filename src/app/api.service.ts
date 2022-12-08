import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchEmploy=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  addEmploy=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  searchEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/search",data)
  }
  deleteEmploy=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataToSend)
  }
}
