import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { userData } from 'src/app/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  users!: userData[];

  constructor(private adminService: AdminService) {}

  //get the users data
  ngOnInit(): void {
    this.adminService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
