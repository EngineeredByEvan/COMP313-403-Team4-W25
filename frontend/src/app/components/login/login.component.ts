import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//primeNG imports
import { PrimengModule } from '../../../primeng.module';

//my imports
import { UserService } from '../../services/user.service';
import { RouterService } from '../../services/router.service';
import { User } from '../../data/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [PrimengModule, FormsModule],
})
export class LoginComponent {
  @Input({ required: true }) email!: string;
  @Input({ required: true }) password!: string;

  userService = inject(UserService);
  routerService = inject(RouterService);
  router = inject(Router);

  errorMessage: string = '';

  onLoginAttempt() {
    console.log(
      'Login Attempted:\n-email: ' +
        this.email +
        '\n-password: ' +
        this.password
    );

    this.userService
      .authenticateUser(this.email, this.password)
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.routerService.navigateToHome();
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      });
  }

  // when user opts to press enter instead of clicking login button
  onEnterButtonPress() {
    this.onLoginAttempt();
  }

  onSubmit(): void {
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);

        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token stored successfully:', response.token);
        }

        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}
