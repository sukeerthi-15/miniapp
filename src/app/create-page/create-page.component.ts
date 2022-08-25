import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { createUser } from '../apis/users';
import { CreateService } from '../apis/create.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    fname: new FormControl(' '),
    lname: new FormControl(' '),
    email: new FormControl(' '),
    phone: new FormControl(' '),
    dob: new FormControl('dd-mm-year'),
  });

  
  users: createUser[] = [];
  
  onSubmit(value:any){
    console.log("submit called");
    console.log(value);
    this.createService.createUser(value).subscribe((res)=>{
      console.log("Added Successfully")
    })
    this.createService.getCreatedUsers().subscribe((data:any)=>{
      this.users = data;
    })    
  }
  show(){

  }
  constructor(private fb: FormBuilder,private http:HttpClient,public createService:CreateService) {}

  ngOnInit(): void {
    // this.myForm.valueChanges.subscribe(console.log);
  }
}
