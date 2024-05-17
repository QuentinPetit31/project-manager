import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  // password: string;
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
  login(body: { email: string | null; password: string | null }) {
    return this.httpClient.post<User>(
      'http://localhost:3000/users/login',
      body
    );
  }

  setUser(user: User) {
    this.user = user;
  }

  logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }
}
