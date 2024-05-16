import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:3000/projects');
  }

  getProjectByName(name: string): Project | undefined {
    let projectFind;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name === name) {
        projectFind = this.projects[i];
      }
    }

    return projectFind;
  }

  getProjectById(id: string) {
    return this.httpClient.get<Project>('http://localhost:3000/projects/' + id);
  }

  createProject(newProject: Project) {
    return this.httpClient.post<boolean>(
      'http://localhost:3000/projects',
      newProject
    );
  }

  updateProject(project: Project) {
    return this.httpClient.put<boolean>(
      'http://localhost:3000/projects/',
      project
    );
  }

  delete(id: number) {
    console.log('delete');
    return this.httpClient.delete<void>('http://localhost:3000/projects/' + id);
  }
}
