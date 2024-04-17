import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Person[] = [];

  private person: Person | null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.refreshPersons();
  }

  getAllPersons(): Person[] {
    return this.persons;
  }

  refreshPersons(): void {
    console.log('refreshPersons');

    this.httpClient
      .get<Person[]>('http://localhost:3000/person')
      .subscribe(persons => {
        console.log('refreshProjects projects  =>', persons);
        this.persons = persons;
      });
  }

  createPerson(newPerson: Person): boolean {
    this.httpClient
      .post<boolean>('http://localhost:3000/person', newPerson)
      .subscribe(isSuccess => {
        if (isSuccess) {
          console.log('createPerson success', newPerson);
          this.refreshPersons();
        } else {
          console.log('createPerson error', newPerson);
        }
      });
    return true;
  }

  getPersonById(id: string): Person | undefined {
    let personFind;
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].id === id) {
        personFind = this.persons[i];
      }
    }
    return personFind;
  }

  updatePerson(person: Person) {
    // ajouter un project à la liste des projects
    // this.projects.push(person);
    return this.httpClient
      .put<boolean>('http://localhost:3000/person/', person)
      .pipe(
        tap(sucess => {
          if (sucess) {
            console.log('modification de person finalisée');
            // verifier ce qu'il y a dans le tableau après inscription (sans renouveler la page)
            this.refreshPersons();
          }
        })
      );
  }

  delete(id: string): void {
    console.log('delete');

    this.httpClient
      .delete<boolean>('http://localhost:3000/person/' + id)
      .subscribe(succes => {
        console.log('refreshProjects projects  =>', succes);
        if (succes) {
          this.refreshPersons();
          this.router.navigateByUrl('/person');
        }
      });
  }
}
