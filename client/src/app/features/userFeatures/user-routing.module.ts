import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/shared/guard/user/user.guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

const routes: Routes = [
  {
    path: "", redirectTo : "user/home", pathMatch : "full"
  },
  {
    path:"user/login",
    component: LoginComponent,
    canActivate : [UserGuard]
  },
  {
    path:"user/register",
    component: RegisterComponent
  },
  {
    path:"user",
    component: LayoutComponent,
    canActivate : [UserGuard],
    data: { animation: 'userFeatureRouteAnimations' },
    children : [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "car/:id",
        component : CarDetailsComponent
      },
      {
        path: "profile",
        component : ProfileComponent,
        children : [
          {
            path : "update",
            component : ProfileFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
