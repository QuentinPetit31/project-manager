import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../../services/project';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PersonService } from '../../../services/person.service';
import { Person } from '../../../services/person';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, MatTableModule],
  templateUrl: './detail-project.component.html',
})
export class DetailProjectComponent implements OnInit {
  project?: Project;
  persons: Person[] = [];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'job'];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    // ajouter personSerbice
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    const nameProject = this.route.snapshot.params['name'];
    console.log('nameProject', nameProject);
    this.project = this.projectService.getProjectByName(nameProject);
    console.log('this.project', this.project);

    if (this.project) {
      console.log('this.project?.personnes', this.project?.personnes);
      this.project.personnes.forEach(personId => {
        console.log(personId);
        // const person = this.personService.getPersonById(personId);
        // console.log('person', person);
        // if (person) {
        //   this.persons.push(person);
        // }
      });
    }
  }

  delete() {
    if (this.project) {
      this.projectService.delete(this.project.name);
    }
  }
}
