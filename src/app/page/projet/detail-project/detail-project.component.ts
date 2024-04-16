import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../../services/project';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './detail-project.component.html',
})
export class DetailProjectComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  // s'il arrive a le recup c'est une update sinon c'est une create
  // a copier dans l'autre fichier
  ngOnInit(): void {
    const nameProject = this.route.snapshot.params['name'];
    console.log(nameProject);
    this.project = this.projectService.getProjectByName(nameProject);
    console.log(this.project);
  }

  delete() {
    if (this.project) {
      this.projectService.delete(this.project.name);
    }
  }
}
