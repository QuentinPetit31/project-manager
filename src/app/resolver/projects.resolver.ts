import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectService } from '../services/project.service';

export const projectsResolver: ResolveFn<Object> = (route, state) => {
  return inject(ProjectService).getAllProjects();
};
