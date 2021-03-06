import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  ordermanagemant:any;
  check:any;
  getData1:any;

  constructor(private http:HttpClient) { }

  signup(v){
    return this.http.post('https://ordermanagements.herokuapp.com/user/signup',v)
    .pipe(map(data=>this.check=data))
 } 
 login(value){
  return this.http.post('https://ordermanagements.herokuapp.com/user/login',value)
  .pipe(map(data=>this.check=data))
 }
    
  //   getData(){

  //     var obj={
  //       "status":'success'
  //       }
  //     return obj 
  //     // return this.http.get('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/ordermanagement')
  //     // .pipe(map(data=>this.check=data))
  //  } 

      
    
    

   createOdr(value){
     
    return this.http.post('https://ordermanagements.herokuapp.com/orders/create',value)
    .pipe(map(data=>this.check=data))
   
   }

   getOrder(){
    return this.http.get('https://ordermanagements.herokuapp.com/orders/list')
    .pipe(map(data=>this.check=data))
  }
  delOrder(value){
    return this.http.post('https://ordermanagements.herokuapp.com/orders/remove',value)
    .pipe(map(data=>this.getData1=data))
  }
  updated(value){
    return this.http.post('https://ordermanagements.herokuapp.com/orders/update',value)
  }
   createinvoice(value){
     return this.http.post('https://5d03744cd1471e00149bace0.mockapi.io/api/v1/invoicedetails',value)
     .pipe(map(data=>this.check=data))
   }
    getInvoice(){
    return this.http.get('https://5d03744cd1471e00149bace0.mockapi.io/api/v1/invoicedetails')
    .pipe(map(data=>this.check=data))
  }

  //  createinvoice(value){
  //    return this.http.post('https://ordermanagements.herokuapp.com/invoice/create',value)
  //    .pipe(map(data=>this.check=data))
  //  }
  //  getInvoice(){
  //   return this.http.get('https://ordermanagements.herokuapp.com/invoice/list')
  //   .pipe(map(data=>this.check=data))
  // }

}
