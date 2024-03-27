import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { name: 'Quentin', email: 'quentin@mail.com', password: '123azerty' },
    { name: 'Thomas', email: 'thomas@mail.com', password: '123azerty' },
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
  login(user: { email: string; password: string }): boolean {
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

  register(user: User): boolean {
    console.log('Appel serviceRegister');
    //Regarder que le mail est unique et que le mdp fait au moins 8 charactères
    //name et mdp if
    if (user.name?.length < 2 && user.password.length < 8) {
      return false;
    }

    let mailAlreadyUsed = false;

    for (let i = 0; i < this.users.length; i++) {
      if (
        //user.name à rajouter avec 1 charac au minimum et il faut qu'aucun utilisateur ne
        //contienne un mail déjà présent dans la liste, après push dans le tab
        this.users[i].email === user.email
      ) {
        mailAlreadyUsed = true;
      }
    }

    if (mailAlreadyUsed) {
      console.log('Le mail est déjà utilisé');
      return false;
    } else {
      // ajouter l'utilisateur a la liste des utilisateurs
      this.users.push(user);
      console.log('inscription finalisée');
      // verifier ce qu'il y a dans le tableau après inscription (sans renouveler la page)
      console.log(this.users);
      return true;
    }
  }
}
