import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ApiResponse, userData } from 'src/app/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService : UserService,
    private router: Router
  ) {}
 

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName : ['',[Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  register(){
    console.log(this.registrationForm.value)
    if(this.registrationForm.invalid) return


    const userDetails: userData = {
      userName: this.registrationForm.value.userName,
      email: this.registrationForm.value.email,
      number: this.registrationForm.value.number,
      password: this.registrationForm.value.password,
    };
    // this.router.navigate(['/login'])

    this.userService.registerUser(userDetails).subscribe((data: ApiResponse) => {
      !data.success ? (this.errorMessage = data.message) : '';
    });
  }

}
