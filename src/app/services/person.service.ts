import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Person[] = [];

  private person: Person | null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:3000/persons');
  }

  createPerson(newPerson: Person) {
    return this.httpClient.post<boolean>(
      'http://localhost:3000/persons',
      newPerson
    );
  }

  getPersonById(id: string) {
    return this.httpClient.get<Person>('http://localhost:3000/persons/' + id);
  }

  updatePerson(person: Person) {
    return this.httpClient.put<boolean>(
      'http://localhost:3000/persons/',
      person
    );
  }

  delete(id: number) {
    console.log('delete');

    return this.httpClient.delete<void>('http://localhost:3000/persons/' + id);
  }

  getPersonsByProjectId(projectId: number): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:3000/persons', {
      params: {
        projectId: projectId.toString(),
      },
    });
  }
}
