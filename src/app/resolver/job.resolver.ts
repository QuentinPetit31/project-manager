import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from '../services/job';

export const jobResolver: ResolveFn<Job | undefined> = (route, state) => {
  const IdString = route.paramMap.get('id');
  return inject(JobService).getJobById(IdString || '');
};
