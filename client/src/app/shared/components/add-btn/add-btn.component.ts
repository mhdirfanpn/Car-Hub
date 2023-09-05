import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent implements OnInit {

  @Input() url! : string
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(){
    console.log("first")
    this.router.navigate([this.url])
  }

}
