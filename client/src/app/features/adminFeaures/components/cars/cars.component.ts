import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { carData } from 'src/app/interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars! : carData[]

  constructor(private adminService : AdminService) { }

  //get cars
  ngOnInit(): void {
    this.adminService.getCars().subscribe(data=>{
      this.cars = data
    })
  }

}
