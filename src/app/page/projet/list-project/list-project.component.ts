import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../../services/person';
import { Project } from '../../../services/project';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './list-project.component.html',
})
export class ProjectListComponent {
  projects!: Project[];
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'startDate',
    'endDate',
    'persons',
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    console.log('data', data);

    this.projects = data['projects'];
  }

  displayPersons(persons: Person[]): string {
    let names: string[] = [];
    persons.forEach(person => {
      names.push(person.firstName + ' ' + person.lastName);
    });
    return names.join(', ');
  }
}
