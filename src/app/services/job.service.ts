import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private httpClient: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    console.log('getAllJobs');
    return this.httpClient.get<Job[]>('http://localhost:3000/jobs');
  }

  createJob(newJob: Job) {
    return this.httpClient.post<boolean>('http://localhost:3000/jobs', newJob);
  }

  getJobById(id: string) {
    return this.httpClient.get<Job>('http://localhost:3000/jobs/' + id);
  }

  updateJob(job: Job) {
    return this.httpClient.put<boolean>('http://localhost:3000/jobs/', job);
  }

  delete(id: number) {
    console.log('delete');
    return this.httpClient.delete<void>('http://localhost:3000/jobs/' + id);
  }

  getJobByProjectId(projectId: number): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:3000/jobs', {
      params: {
        projectId: projectId.toString(),
      },
    });
  }
}
