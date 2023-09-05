import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token: string | null = null;

    if (this.authService.isLoggedIn()) {
      token = this.authService.getJwtToken();
    } else {
      token = this.authService.getAdminToken();
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }


    return next.handle(request)
    .pipe(catchError((err: any) => {
        console.log('this log isn');
        if (err instanceof HttpErrorResponse) {
            if (err.status === 403) {
                console.log('Unauthorized');
            }
        }

      return new Observable<HttpEvent<any>>();
    }));
  }
}
