import { Component, OnInit } from '@angular/core';
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

  jobs!: Job[];

  // permets de gérer la gestion du rafraichissement des job après delete ou update
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.jobs = data['jobs'];
  }
}
