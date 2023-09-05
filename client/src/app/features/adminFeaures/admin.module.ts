import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { AddCarComponent } from './components/add-car/add-car.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdminLoginComponent,
    LayoutComponent,
    SideBarComponent,
    UsersListComponent,
    CarsComponent,
    CarsListComponent,
    AddCarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
     
  ]
})
export class AdminModule { }
