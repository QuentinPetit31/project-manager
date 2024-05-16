import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private user: User | null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  refresh(): void {
    console.log('refreshUsers');

    this.httpClient
      .get<User[]>('http://localhost:3000/users')
      .subscribe(users => {
        console.log('refreshProjects users  =>', users);
        this.users = users;
      });
  }

  create(newUser: CreateUser) {
    return this.httpClient
      .post<boolean>('http://localhost:3000/users', newUser)
      .pipe(tap(() => this.refresh()));
  }

  /**
   * return current logged user
   */
  getUser(): User | null {
    return this.user;
  }

  /**
   *  set user
   * @param user
   */
  // check if user exist
  // if yes, you store the user and return true
  // if no, return false
  // return to the user a response (connection ok or not)
  login(userLogin: { email: string; password: string }): boolean {
    // soit faire :
    const foundUser = this.users.find(
      user =>
        user.email === userLogin.email && userLogin.password === user.password
    );
    if (foundUser) {
      this.user = foundUser;
      console.log("l'utilisateur existe");
      return true;
    } else {
      console.log('Les éléments renseignés ne sont pas correctes');
      return false;
    }
  }
  logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }
}
