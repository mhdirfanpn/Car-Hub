import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchChanged = new EventEmitter<string>();
  search! : string

  constructor() { }

  onSearchChange(): void {
    this.searchChanged.emit(this.search);
  }

  ngOnInit(): void {
  }


}
