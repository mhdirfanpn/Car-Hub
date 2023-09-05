import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { userData } from 'src/app/interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() userData! : userData[]
  search! :string

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  //block / unblock user
  onCheckboxChange(id : any){
    this.adminService.blockUser(id).subscribe()
  }

  //search user
  onSearchChanged(searchValue:string){
    this.search = searchValue
  }

}
