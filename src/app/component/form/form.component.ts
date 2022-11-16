import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userDetail:User = new User("","","","","",0,"",0)
  Id: any = this.route.snapshot.paramMap.get("Id");
  
  constructor(private serve : UserserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.serve.getUserById(this.Id).subscribe((res:any)=>
    {
      console.log(res)
      this.userDetail = res
    }
    )
  }
  addUser(){
    console.log(this.userDetail);
    this.serve.addUserDet(this.userDetail).subscribe((res:any)=>
    {
      this.router.navigate(["/"])
    }
    )
  }
  update(){
    console.log(this.Id)
    this.serve.updateUser(this.Id, this.userDetail).subscribe((res:any)=>
    {
      this.router.navigate(["/"]);
    }
    )

  }

}
