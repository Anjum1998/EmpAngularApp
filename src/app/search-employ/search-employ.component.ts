import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employ',
  templateUrl: './search-employ.component.html',
  styleUrls: ['./search-employ.component.css']
})
export class SearchEmployComponent {
  empCode=""
  
constructor(private api:ApiService, private route:Router){}
searchData:any=[]
  readValue=()=>
  {
    let data:any={"empCode":this.empCode}
    console.log(data)
    this.api.searchEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid emp code")
        } else {
          this.searchData=response;
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("employ deleted successfully")
          this.route.navigate(['/search'])
        } else {
          alert("can not delete")
        }
      }
    )
  }
}
