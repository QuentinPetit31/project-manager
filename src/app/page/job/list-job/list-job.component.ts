import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Job } from '../../../services/job';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
  templateUrl: './list-job.component.html',
})
export class JobListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];

  jobs?: Job[];
  // permets de gérer la gestion du rafraichissement des job après delete ou update
  constructor(
    jobService: JobService,
    changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('constructor');

    //   jobService
    //     .getAllJobs()
    //     .toPromise()
    //     .then(jobs => {
    //       if (jobs) {
    //         this.jobs = jobs;
    //         // console.log('this.job =', this.jobs);
    //         changeDetectorRef.detectChanges();
    //       }
    //     });
  }
  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    console.log('jobs = ', data);
    console.log('jobs 5 = ', data['jobs']);
    this.jobs = data['jobs'];
  }
}
