import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allUser:any
  constructor(private serve : UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getallUser();
  }
  getallUser(){
    this.serve.getListUser().subscribe((res:any)=>
    {
      console.log(res)
      this.allUser = res.data
      
    }
    )
    console.log(this.allUser)
  }
  delete(id:number){
    this.serve.deleteUser(id).subscribe();
    this.getallUser();
  }
  edit(Id:any){
    console.log(Id)
    this.router.navigate(['updateEmp', Id])
  }

}
