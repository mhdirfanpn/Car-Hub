import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ApiResponse, carData, userData } from 'src/app/interface';
import { Router } from '@angular/router';
import { USER_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  //get user details from token
  getUser() {
    return this.authService.getDecodedAccessToken('user');
  }

  //user login
  userLogin(email: string, password: string) : Observable<ApiResponse>  {
    const data = {
      email,
      password,
    };
    return this.http.post<ApiResponse>(`${USER_API}/login`, data).pipe(tap((data) => {
        data.success ? this.authService.setUserToken(data.token) : '';
      })
    );
  }

  //register new user
  registerUser(userDetails: userData) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${USER_API}/register`, userDetails).pipe(tap((data) => {
        data.success ? this.router.navigate(['/user/login']) : '';
      })
    );
  }

  //get cars
  getCars() : Observable<carData[]>  {
    return this.http.get<carData[]>(`${USER_API}/cars`);
  }

  //get the login user details
  getUserDetails() : Observable<userData>  {
    const user = this.getUser();
    return this.http.get<userData>(`${USER_API}/details/${user.id}`);
  }

  //update user data
  updateData(userDetails: userData) : Observable<ApiResponse> {
    const user = this.getUser();
    return this.http.post<ApiResponse>(`${USER_API}/update/${user.id}`, userDetails).pipe(tap((data) => {
        this.router.navigate(['/user/profile']);
      })
    );
  }

  //get individual car details
  getCarDetails(id:string) : Observable<carData>{
    return this.http.get<carData>(`${USER_API}/carDetails/${id}`);
  }
}
