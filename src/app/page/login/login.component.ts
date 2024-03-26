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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });
  constructor(private userService: UserService) {
    //appeller user service
    userService;
  }

  login() {
    const formValue = this.form.getRawValue() as User;
    console.log('login = ', formValue);

    // this.userService.login())
    // Appel de la méthode login du service UserService avec les informations du formulaire
    const login = this.userService.login(formValue);
    console.log('login', login);
  }
}
