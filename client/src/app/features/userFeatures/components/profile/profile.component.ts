import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from 'src/app/interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile } from '../../state/profile/profile.selector';
import { loadProfile } from '../../state/profile/profile.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private store : Store) {}

  user$!: Observable<userData | null>;

  //get doctor details
  ngOnInit(): void {
    this.user$ = this.store.select(getProfile);

    this.store.dispatch(loadProfile());
  }

 




  

}
