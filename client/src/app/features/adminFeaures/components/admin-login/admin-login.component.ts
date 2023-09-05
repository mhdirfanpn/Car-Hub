import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { AdminApiResponse } from 'src/app/interface';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  errorMessage: string | undefined;

  //setting the default value
  admin = {
    email: 'admin@gmail.com',
    password: '123123'
  };

  ngOnInit(): void {
  }

  //whe submiiting form
  onSubmit(data:NgForm){
    console.log(data.value)
    this.adminService.adminLogin(data.value.email,data.value.password).subscribe((data: AdminApiResponse) => {
        !data.success ? (this.errorMessage = data.message) : '';
      });
  }

}
