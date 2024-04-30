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

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'job'];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    // ajouter personService
    private personService: PersonService
  ) {}

  // s'il arrive a le recupérer c'est une update sinon c'est une create
  ngOnInit(): void {
    const idProjectString = this.route.snapshot.params['id'];
    console.log('idProjectString =', idProjectString);
    //typeof pour visualiser un type
    console.log('typeof idProjectString', typeof idProjectString);

    const idProject = Number(idProjectString);
    if (!isNaN(idProject)) {
      this.project = this.projectService.getProjectById(idProject);
      console.log('this.project =', this.project);
    }
  }

  delete() {
    if (this.project) {
      this.projectService.delete(this.project.name);
    }
  }
}
