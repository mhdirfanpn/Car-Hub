import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  //when logout 
  adminLogout(){
    this.authService.logout('admin')
  }

}
