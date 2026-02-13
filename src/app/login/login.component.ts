import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const user: any = JSON.parse(localStorage.getItem('user') || '{}');

    if (this.email === user.email && this.password === user.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  goToRegister() {
    this.router.navigate(['/']);
  }
}
