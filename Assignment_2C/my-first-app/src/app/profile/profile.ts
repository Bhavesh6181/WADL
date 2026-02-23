import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private router: Router) {}

  ngOnInit() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}