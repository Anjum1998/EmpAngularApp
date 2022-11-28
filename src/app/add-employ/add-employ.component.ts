import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {

  name=""
  designation=""
  salary=""
  company=""


  readValue=()=>
  {
    let data:any= {
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "company":this.company
    }
    console.log(data)
  }


}
