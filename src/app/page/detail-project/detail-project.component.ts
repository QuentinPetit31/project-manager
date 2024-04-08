import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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

  ngOnInit(): void {
    const nameProject = this.route.snapshot.params['name'];
    console.log(nameProject);
    this.project = this.projectService.getProjectByName(nameProject);
    console.log(this.project);
  }
}
