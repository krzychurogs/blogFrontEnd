import { RegisterService } from './../services-register/register.service';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: { username: string; password: string; email: string; };
  constructor(private userService:RegisterService) {
    this.register={
      username:'',
      password:'',
      email:'',
    }
   }


  ngOnInit(): void {

  }
  registerC()
  {
    this.userService.registerUser(this.register).subscribe((response:any)=>
      {
          alert('User'+ this.register.username+'created')
      });
  }
}
