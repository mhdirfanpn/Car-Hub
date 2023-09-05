import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { carData } from 'src/app/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars! : carData[]

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getCars().subscribe(data=>{
      this.cars = data
    })
  }

}
