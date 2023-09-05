import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ApiResponse } from 'src/app/interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService : UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        'user@gmail.com',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      password: ['123123', [Validators.required, Validators.minLength(6)]],
    });
  }


  login(){
    if(this.loginForm.invalid) return
    this.userService.userLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe((data:ApiResponse)=>{
      !data.success ? (this.errorMessage = data.message) : '';
    })
  }

}
