import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  constructor(private router: Router) {
    console.log('d');
    this.show = !!localStorage.getItem('usertoken');
  }

  onLogout() {
    this.router.navigate(['login']);
    localStorage.removeItem('usertoken');
    localStorage.removeItem('nameuser');
    localStorage.removeItem('userid');
  }

  ngOnInit(): void {}
}
