import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {

  empName=""
  empCode=""
  designation=""
  salary=""
  company=""
  username=""
  password=""
  mobile=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any= {
      "empName":this.empName,"empCode":this.empCode,
      "designation":this.designation,
      "salary":this.salary,
      "company":this.company,"username":this.username,"password":this.password,"mobile":this.mobile
    }
    console.log(data)
    this.api.addEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("employee added successfully")
        } else {
          alert("something went wrong")
        }
      }
    )
  }


}
