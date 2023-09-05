import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminGuard } from 'src/app/shared/guard/admin/admin.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { AddCarComponent } from './components/add-car/add-car.component';

const routes: Routes = [
  {
    path:"login",
    component:AdminLoginComponent,
    canActivate : [AdminGuard]
  },
  {
    path:"",
    component: LayoutComponent,
    canActivate : [AdminGuard],
    children : [
      {
        path:"home",
        component : HomeComponent
      },
      {
        path:"cars",
        component: CarsComponent
      },
      {
        path:"add",
        component : AddCarComponent
      }
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
