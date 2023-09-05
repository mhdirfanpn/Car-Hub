import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAdminLoggedIn()) {
      // Authenticated user - allow access to the requested route
      // Redirect to home page if the requested route is '/login'
      if (state.url === '/admin/login') {
        this.router.navigate(['/admin/home']);
        return false;
      }
      return true;
    } else {
      // Not authenticated user - redirect to the login page
      if (state.url !== '/admin/login') {
        this.router.navigate(['/admin/login']);
        return false;
      }
    }
    return true;
  }
}
