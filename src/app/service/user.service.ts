import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { email: 'quentin@mail.com', password: '123' },
    { email: 'thomas@mail.com', password: '123' },
  ];
  private user: User | null = null;

  constructor() {}

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
  login(user: User): boolean {
    // soit faire :
    // const foundUser = this.users.find(
    //   user => user.email === user.email && user.password === user.password
    // );
    // if (foundUser) {
    //   this.user = foundUser;
    //   console.log("l'utilisateur existe");
    //   return true;
    // } else {
    //   console.log('Les éléments renseignés ne sont pas correctes');
    //   return false;
    // }
    //soit faire :
    let foundUser = null;
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].email === user.email &&
        this.users[i].password === user.password
      ) {
        foundUser = this.users[i];
      }
    }
    if (foundUser) {
      this.user = foundUser;
      console.log("l'utilisateur existe");
      return true;
    } else {
      console.log('Les éléments renseignés ne sont pas correctes');
      return false;
    }
  }
}
