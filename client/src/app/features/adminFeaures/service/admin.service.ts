import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AdminApiResponse, carData, userData } from 'src/app/interface';
import { ADMIN_API } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}


    //admin login
    adminLogin(email: string, password: string) {
      const data = {
        email,
        password,
      };
      return this.http.post<AdminApiResponse>(`${ADMIN_API}/login`, data).pipe(
        tap((data) => {
          if (data.success) {
            this.authService.setAdminToken(data.adminToken);
          }
        })
      );
    }

    //get all cars
    getCars(){
      return this.http.get<carData[]>(`${ADMIN_API}/cars`)
    }

    //get all users
    getUsers(){
      return this.http.get<userData[]>(`${ADMIN_API}/users`)
    }

     //block / unBlock users
    blockUser(id:string){
      return this.http.get(`${ADMIN_API}/blockUser/${id}`);
    }

    //add new car
    addCar(formData: File):Observable<any>{
      console.log(formData,"asfdassadasdas")
      return this.http.post<any[]>(`${ADMIN_API}/addCar`,formData)
    }

    
}


