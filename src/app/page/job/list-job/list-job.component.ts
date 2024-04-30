import { Component } from '@angular/core';
import { JobService } from '../../../services/job.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Job } from '../../../services/job';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
  templateUrl: './list-job.component.html',
})
export class JobListComponent {
  displayedColumns: string[] = ['id', 'name'];

  get jobs() {
    return this.jobService.getAllJobs();
  }

  constructor(private jobService: JobService) {}
}
