import { Injectable } from '@angular/core';
import { Person } from '../page/person/person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Person[] = [
    { id: '01', firstName: 'Quentin', lastName: 'Petit', job: 'Web Developer' },
    { id: '02', firstName: 'Thomas', lastName: 'Petit', job: 'Web Developer' },
  ];
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
    // check request.body have the good format
    if (!newPerson.id || newPerson.id.length <= 2) {
      return false;
    }
    // check if person name already exist

    this.persons.push(newPerson);
    console.log('createUser success', newPerson);
    return true;
  }
}
