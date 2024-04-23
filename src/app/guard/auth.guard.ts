import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const AuthGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.getUser()) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
