import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userData } from 'src/app/interface';
import { getProfile } from '../../state/profile/profile.selector';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { updateProfile } from '../../state/profile/profile.action';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  constructor(
    private router: Router,
    private userService : UserService,
    private store: Store,
    private formBuilder: FormBuilder
  ) {}

  user!: userData;
  updateForm!: FormGroup;

  ngOnInit(): void {
    this.store.select(getProfile).subscribe((data) => {
      console.log('hai', data, 'hello');
      this.updateForm = this.formBuilder.group({
        userName: [
          data?.userName,
          [Validators.required, Validators.minLength(4)],
        ],
        email: [
          data?.email,
          [
            Validators.required,
            Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
          ],
        ],
      });
    });
  }

  update() {
    console.log(this.updateForm.value);
    if (this.updateForm.invalid) return;

    const user : userData = {
      userName : this.updateForm.value.userName,
      email : this.updateForm.value.email
    }

    this.store.dispatch(updateProfile({ user }));

  }
}
