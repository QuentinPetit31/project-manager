import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PersonService } from '../../../services/person.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Person } from '../../../services/person';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './list-person.component.html',
})
export class PersonListComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'job'];

  persons!: Person[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.persons = data['persons'];
  }
}
