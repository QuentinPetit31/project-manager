import { Component } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  displayedColumns: string[] = [
    'name',
    'description',
    'startDate',
    'endDate',
    'personnes',
  ];

  get projects() {
    return this.projectService.getAllProjects();
  }
  constructor(private projectService: ProjectService) {}
}
