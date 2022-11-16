import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  getListUser(){
    return this.http.get("http://localhost:8080/getdtobyservice");
  }
  addUserDet(userDet:any){
    return this.http.post("http://localhost:8080/postdtobyserviclayer", userDet);
  }
  deleteUser(id:any){
    return this.http.delete("http://localhost:8080/deleteP/"+id)
  }
  getUserById(Id:any){
    return this.http.get("http://localhost:8080/getbyidbydtoservicP/"+Id);
  }
  updateUser(Id:any, user:any){
    return this.http.put("http://localhost:8080/putbydtosurviclayer/"+Id, user);
  }
}
