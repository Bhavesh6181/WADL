import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (!this.email || !this.password) {
      alert("Please fill all fields");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (!storedUser.email) {
      alert("No user found. Please register first.");
      return;
    }

    if (this.email === storedUser.email && this.password === storedUser.password) {
      localStorage.setItem('isLoggedIn', 'true');
      alert("Login Successful");
      this.router.navigate(['/profile']);
    } else {
      alert("Invalid Credentials");
    }
  }
}