import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Project } from '../project/project';
import { ProjectService } from '../../service/project.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss',
})
export class DetailProjectComponent implements OnInit {
  project: Project | null = null;

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
