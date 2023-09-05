import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  @Input() carDetails : any
  search! : string
  routerLink : string = 'admin/add'

  constructor() { }

  ngOnInit(): void {
  }

  //for searching
  onSearchChanged(searchValue:string){
    this.search = searchValue
  }

}
