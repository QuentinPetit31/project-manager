import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl<string>('quentin@mail.com', [
      Validators.required,
      Validators.email,
    ]),
    // email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('123azerty', [
      Validators.required,
      Validators.minLength(8),
    ]),
    // password: new FormControl<string>('', [
    //   Validators.required,
    //   Validators.minLength(8),
    // ]),
  });
  asError = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login() {
    // if form valide
    if (this.form.valid) {
      // récupère la valeur du form
      const formValue = this.form.getRawValue() as User;
      console.log('formValue = ', formValue);

      // Appel de la méthode login du service UserService avec les informations du formulaire
      const loginSuccess = this.userService.login(formValue);
      console.log('loginSuccess', loginSuccess);
      // si ok redirection homepage
      if (loginSuccess) {
        this.router.navigate(['']);
        // <a routerLink="/login" mat-button>this.userService.login(formValue)</a>
      } else {
        //si erreur message sous bouton
        this.asError = true;
      }
    }
  }
  redirectToEnrollPage() {
    this.router.navigate(['/enroll']);
  }
}
