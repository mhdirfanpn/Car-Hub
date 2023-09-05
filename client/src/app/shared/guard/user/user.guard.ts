import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/userFeatures/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private userService : UserService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        //checking if user is blocked or not
        const token = this.authService.getDecodedAccessToken('user');
        this.userService.getUserDetails().subscribe((user) => {
          user.isBlocked ? this.authService.logout('user') : '';
        });
  
        // Authenticated user - allow access to the requested route
        // Redirect to home page if the requested route is '/login'
        if (state.url === '/user/login') {
          this.router.navigate(['/user/home']);
          return false;
        }
        return true;
      } else {
        // Not authenticated user - redirect to the login page
        if (state.url !== '/user/login') {
          this.router.navigate(['/user/login']);
          return false;
        }
      }
      return true;
  }
  
}
