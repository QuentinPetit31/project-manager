import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PersonService } from '../../service/person.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule, MatTableModule],
  templateUrl: './person.component.html',
})
export class PersonComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'job'];

  get persons() {
    return this.personService.getAllPersons();
  }

  constructor(private personService: PersonService) {}
}
