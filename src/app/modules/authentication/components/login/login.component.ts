import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private router: Router, private serviceAuth: AuthService) {
    console.log('dsd');
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  goToRegister() {
    this.router.navigate(['register']);
  }
  getf() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.serviceAuth.loginUser(this.myForm.value).subscribe((response: any) => {
      console.log(response);
      this.serviceAuth.userid = response.user.id;
      localStorage.setItem('usertoken', response.token);
      localStorage.setItem('userid', response.user.id);
      localStorage.setItem('nameuser', this.myForm.controls['username'].value);
      alert('Udało się zalogować');
      this.router.navigate(['posty']);
    });
  }
}
