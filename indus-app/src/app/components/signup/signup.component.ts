import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    role: 'default',
  };

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  signup() {
    this.authService.signup(this.user).subscribe(
      (res: any) => {
        console.log('Signup Successful', res);

        // store token locally
        if (res.token) {
          localStorage.setItem('token', res.token);
        }

        // show success pop up
        this.snackBar.open('signup Successfull', 'OK', {
          duration: 3000,
          panelClass: 'success-snackbar',
        });
      },
      (err) => {
        console.error('Signup Failed', err);

        // Show error pop-up
        this.snackBar.open('Signup Failed. Try again.', 'OK', {
          duration: 3000,
          panelClass: 'error-snackbar',
        });
      }
    );
  }
}
