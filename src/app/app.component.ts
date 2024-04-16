import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { User, UserService } from './services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'project-manager';
  get user(): User | null {
    return this.userService.getUser();
  }

  constructor(private userService: UserService) {}
}
