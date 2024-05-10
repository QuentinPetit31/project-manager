import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  //JE COMPREND PAS ICI
  private jobs: Job[] = [];
  // private job: Job | null = null;
  //
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.refreshJobs();
  }

  getAllJobs(): Observable<Job[]> {
    console.log('getAllJobs', this.jobs);
    console.log('refreshJobs');

    return this.httpClient.get<Job[]>('http://localhost:3000/jobs');
  }

  refreshJobs(): void {
    console.log('refreshJobs');

    this.httpClient.get<Job[]>('http://localhost:3000/jobs').subscribe(jobs => {
      console.log('refreshProjects jobs  =>', jobs);
      this.jobs = jobs;
    });
  }

  createJob(newJob: Job): boolean {
    this.httpClient
      .post<boolean>('http://localhost:3000/jobs', newJob)
      .subscribe(isSuccess => {
        if (isSuccess) {
          console.log('createJob success', newJob);
          this.refreshJobs();
        } else {
          console.log('createJob error', newJob);
        }
      });
    return true;
  }

  getJobById(id: string) {
    return this.httpClient.get<Job>('http://localhost:3000/jobs/' + id);
  }

  updateJob(job: Job) {
    return this.httpClient
      .put<boolean>('http://localhost:3000/jobs/', job)
      .pipe(
        tap(sucess => {
          if (sucess) {
            console.log('modification du job finalisée');
            // verifier ce qu'il y a dans le tableau après inscription (sans renouveler la page)
            this.refreshJobs();
          }
        })
      );
  }

  delete(id: number): void {
    console.log('delete');

    this.httpClient
      .delete<boolean>('http://localhost:3000/jobs/' + id)
      .subscribe(succes => {
        console.log('refreshJobs jobs  =>', succes);
        if (succes) {
          this.refreshJobs();
          this.router.navigateByUrl('/job');
        }
      });
  }

  getJobByProjectId(projectId: number): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:3000/jobs', {
      params: {
        projectId: projectId.toString(),
      },
    });
  }
}
