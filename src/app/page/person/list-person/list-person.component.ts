import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PersonService } from '../../../services/person.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Person } from '../../../services/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule, MatTableModule],
  templateUrl: './list-person.component.html',
})
export class PersonListComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'job'];

  // get persons() {
  //   return this.personService.getAllPersons();
  // }
  persons!: Person[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.persons = data['persons'];
    console.log('persons', this.persons);
  }
}
