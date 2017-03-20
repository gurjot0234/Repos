import { Component } from '@angular/core';
import {ServiceRequestService} from'./serviceRequest.service';
import{serviceRequest} from'./serviceRequest';
import{OnInit} from'@angular/core';
import{OrderBy} from'./orderBy'
@Component({
  selector: 'servicelist',
  template:`
  
  <table >
  <th ><h3 (click)="orderById()">ID</h3></th>  <th ><h3 (click)="orderByName()">Name</h3></th>
  <th><h3 (click)="orderByType()">Type</h3></th>  <th><h3 (click)="orderByStatus()">Status</h3></th>
  <tr *ngFor="let service of services | orderBy:[variable]">
    
    <td>{{service.id}}</td>

      <td>{{service.Name }} </td>

      <td>{{service.type}}</td>

    <td>{{service.status}}</td>
  </tr>
  </table>
  
`,
providers:[ServiceRequestService]

})


export class ServiceListComponent implements OnInit { 
  variable:any='Name';
  
  id1:string='+';
    private services:serviceRequest[];
    constructor(private serviceRequestService:ServiceRequestService){



    }
getServices(){
this.serviceRequestService.getServiceRequest().then((services:serviceRequest[])=>this.services=services);

}
orderById(){

if(this.variable=='+id')
{
  this.variable='-id';
}
else{this.variable='+id';}
}


orderByName(){

if(this.variable=='+Name')
{
  this.variable='-Name';
}
else{this.variable='+Name';}
}

orderByType(){

if(this.variable=='+type')
{
  this.variable='-type';
}
else{this.variable='+type';}
}

orderByStatus(){
if(this.variable=='+status')
{
  this.variable='-status';
}
else{this.variable='+status';}


}


ngOnInit(){

    this.getServices();
}
}
