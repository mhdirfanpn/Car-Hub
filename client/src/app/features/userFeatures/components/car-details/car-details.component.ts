import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { carData } from 'src/app/interface';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {

  getParamId!: string
  car! : carData

  constructor(
    private activeRouter: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
     //getting the car id from the previous router
     this.activeRouter.paramMap.subscribe((params) => {
      this.getParamId = params.get('id')!;
    });

    this.userService.getCarDetails(this.getParamId).subscribe(data=>{
      this.car = data
    })
  }
}
