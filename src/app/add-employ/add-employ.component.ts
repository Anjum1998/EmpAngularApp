import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {

  emp_name=""
  emp_code=""
  designation=""
  salary=""
  company=""
  username=""
  password=""
  mobile=""


  readValue=()=>
  {
    let data:any= {
      "emp_name":this.emp_name,"emp_code":this.emp_code,
      "designation":this.designation,
      "salary":this.salary,
      "company":this.company,"username":this.username,"password":this.password,"mobile":this.mobile
    }
    console.log(data)
  }


}
