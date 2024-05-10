import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Project } from '../services/project';
import { ProjectService } from '../services/project.service';

export const projectResolver: ResolveFn<Project | undefined> = (
  route,
  state
) => {
  const idString = route.paramMap.get('id');
  return inject(ProjectService).getProjectById(idString || '');
};
