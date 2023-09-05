import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { carData } from 'src/app/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() cars! : carData[]
 
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    
  }

  viewCar(id:string){
    this.router.navigate(['/user/car', id]);
  }

}
