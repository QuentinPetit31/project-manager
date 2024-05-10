import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { JobService } from '../services/job.service';

export const jobsResolver: ResolveFn<Object> = (route, state) => {
  return inject(JobService).getAllJobs();
};
