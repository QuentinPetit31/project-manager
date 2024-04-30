import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Job } from '../../../services/job';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, MatTableModule],
  templateUrl: './detail-job.component.html',
})
export class DetailJobComponent implements OnInit {
  job?: Job;

  displayedColumns: string[] = ['id', 'name'];

  constructor(
    private route: ActivatedRoute,
    // ajouter JobService
    private jobService: JobService
  ) {}

  // s'il arrive a le recupérer c'est une update sinon c'est une create
  ngOnInit(): void {
    const idJobString = this.route.snapshot.params['id'];
    console.log('idJobString =', idJobString);
    //typeof pour visualiser un type
    console.log('typeof idJobString', typeof idJobString);

    const idJob = Number(idJobString);
    if (!isNaN(idJob)) {
      this.job = this.jobService.getJobById(idJob);
      console.log('this.job =', this.job);
    }
  }

  delete() {
    if (this.job && this.job.id) {
      this.jobService.delete(this.job.id);
    }
  }
}
