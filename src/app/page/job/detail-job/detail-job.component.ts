import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Job } from '../../../services/job';
import { JobService } from '../../../services/job.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './detail-job.component.html',
})
export class DetailJobComponent implements OnInit {
  job!: Job;

  displayedColumns: string[] = ['id', 'name'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  // s'il arrive a le recupérer c'est une update sinon c'est une create
  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.job = data['job'];
  }

  delete() {
    if (this.job.id) {
      this.jobService.delete(this.job.id).subscribe(() => {
        this.router.navigateByUrl('/job');
      });
    }
  }
}
