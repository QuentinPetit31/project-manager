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
    private activatedRoute: ActivatedRoute,
    // ajouter JobService
    private jobService: JobService
  ) {}

  // s'il arrive a le recupérer c'est une update sinon c'est une create
  ngOnInit(): void {
    // const idPersonString = this.route.snapshot.params['id'];
    // console.log('idPersonString =', idPersonString);
    // //typeof pour visualiser un type
    // console.log('typeof idPersonString', typeof idPersonString);

    // const idPerson = Number(idPersonString);
    // if (!isNaN(idPerson)) {
    //   this.person = this.personService.getPersonById(idPerson);
    //   console.log('this.persons =', this.person);
    // }
    const data = this.activatedRoute.snapshot.data;
    this.job = data['job'];
  }

  delete() {
    if (this.job && this.job.id) {
      this.jobService.delete(this.job.id);
    }
  }
}
