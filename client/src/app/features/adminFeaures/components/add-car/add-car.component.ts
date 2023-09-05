import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addForm! : FormGroup
  file! : File

  constructor(
    private formBuilder : FormBuilder,
    private adminService :AdminService,
    private router : Router
  ) { }

  //create form and validations
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      make_id : ['',[Validators.required]],
      model : ['',[Validators.required]],
      year : ['',[Validators.required]],
      color : ['',[Validators.required]],
      price : ['',[Validators.required]],
      city : ['',[Validators.required]],
      state : ['',[Validators.required]],
      image : ['',[Validators.required]],
      
    })
  }

  //when selecting an image
  onImageSelected(event: any) {
    this.file = File = event.target.files[0];
  }

  //when submitting the form
  addCar(): void {
    console.log(this.addForm.value.image)
    if (this.addForm.valid) {
      const formData = new FormData();
    
      formData.append('make_id', this.addForm.get('make_id')?.value);
      formData.append('model', this.addForm.get('model')?.value);
      formData.append('year', this.addForm.get('year')?.value);
      formData.append('color', this.addForm.get('color')?.value);
      formData.append('price', this.addForm.get('price')?.value);
      formData.append('city', this.addForm.get('city')?.value);
      formData.append('state', this.addForm.get('state')?.value);
      formData.append('image', this.file);
    

  
      this.adminService.addCar(formData).subscribe(data=>{
        this.router.navigate(['/admin/cars'])
      })

      
    }
    
  }

}
