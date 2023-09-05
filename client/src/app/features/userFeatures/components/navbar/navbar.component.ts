import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  navbar: boolean = false; // For toggling the mobile menu
  user: boolean = false;

  ngOnInit(): void {

        //get the top when navigation
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            window.scrollTo(0, 0);
          }
        });

    const token = this.authService.getJwtToken();
    token ? (this.user = true) : (this.user = false);
  }

  logout(){
    console.log("logout called")
    this.authService.logout('user');
  }

  login(){
    this.router.navigate(['/user/login'])
  }

}
