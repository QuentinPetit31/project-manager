import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
  templateUrl: './list-project.component.html',
})
export class ProjectListComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'startDate',
    'endDate',
    'persons',
  ];

  get projects() {
    return this.projectService.getAllProjects();
  }

  constructor(private projectService: ProjectService) {}
}
