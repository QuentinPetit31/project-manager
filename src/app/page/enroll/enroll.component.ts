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
import { User, UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.scss',
})
export class EnrollComponent {
  form = new FormGroup({
    name: new FormControl<string>('Quentin', [
      Validators.required,
      Validators.minLength(2),
    ]),

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
    confirmPassword: new FormControl<string>('123azerty', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  asError = false;
  passwordError = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  register() {
    // if form valide
    if (this.form.valid) {
      // récupère la valeur du form
      const formValue = this.form.getRawValue();
      console.log('formValue = ', formValue);

      if (formValue.password === formValue.confirmPassword) {
        this.passwordError = false;
        // Appel de la méthode login du service UserService avec les informations du formulaire
        const registerSuccess = this.userService.register({
          name: formValue.name || '',
          email: formValue.email || '',
          password: formValue.password || '',
        });

        console.log('registerSuccess', registerSuccess);
        // si ok redirection homepage
        if (registerSuccess) {
          this.router.navigate(['/login']);
          // <a routerLink="/login" mat-button>this.userService.login(formValue)</a>
        } else {
          //si erreur message sous bouton
          this.asError = true;
        }
      } else {
        this.passwordError = true;
      }
    }
  }
}
