import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
  private user: User | null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  /**
   * return current logged user
   */
  getUser(): User | null {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  create(newUser: CreateUser) {
    return this.httpClient.post<boolean>(
      'http://localhost:3000/users',
      newUser
    );
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

  logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }
}
