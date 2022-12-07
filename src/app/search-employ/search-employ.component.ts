import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employ',
  templateUrl: './search-employ.component.html',
  styleUrls: ['./search-employ.component.css']
})
export class SearchEmployComponent {
  empCode=""
  
constructor(private api:ApiService){}
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
}
