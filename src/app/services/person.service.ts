import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

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

  // delete(id: number): void {
  //   console.log('delete');

  //   this.httpClient
  //     .delete<boolean>('http://localhost:3000/persons/' + id)
  //     .subscribe(succes => {
  //       console.log('refreshProjects persons  =>', succes);
  //       if (succes) {
  //         this.refreshPersons();
  //         this.router.navigateByUrl('/person');
  //       }
  //     });
  // }

  getPersonsByProjectId(projectId: number): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:3000/persons', {
      params: {
        projectId: projectId.toString(),
      },
    });
  }
}
