import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  register() {

    if (!this.user.name || !this.user.email || !this.user.password) {
      alert("All fields are required");
      return;
    }

    if (this.user.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.user));
    alert("Registration Successful");
    this.router.navigate(['/login']);
  }
}