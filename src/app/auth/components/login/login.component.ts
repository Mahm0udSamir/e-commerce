import { RequestUser } from './../../types/request-user.interface';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const user: RequestUser = {
      username: this.username.value,
      password: this.password.value,
    };

    this.authService.setUserData(user);
    this.router.navigate(['/categories']);
  }
}
