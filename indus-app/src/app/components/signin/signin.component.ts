import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  user = {
    uid: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}
  signin() {
    this.authService.signin(this.user).subscribe(
      (res: any) => {
        console.log('Signin Successful', res);

        // Store token in localStorage
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
        }
        const token = localStorage.getItem('token');
        console.log('token is:', token);

        // Show success pop-up
        this.snackBar.open('Login Successful!', 'OK', {
          duration: 3000,
          panelClass: 'success-snackbar',
        });

        // Redirect if needed (optional)
        // this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.error('Signin Failed', err);
        this.snackBar.open('Login Failed. Check your credentials.', 'OK', {
          duration: 3000,
          panelClass: 'error-snackbar',
        });
      }
    );
  }
}
