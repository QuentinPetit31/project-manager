import { Injectable, OnInit } from '@angular/core';
import { Project } from '../page/project/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];

  constructor(private httpClient: HttpClient) {
    this.refreshProjects();
  }

  refreshProjects(): void {
    console.log('refreshProjects');

    this.httpClient
      .get<Project[]>('http://localhost:3000/project')
      .subscribe(projects => {
        console.log('refreshProjects projects  =>', projects);
        this.projects = projects;
      });
  }

  getAllProjects(): Project[] {
    console.log('getAllProjects', this.projects);
    return this.projects;
  }

  getProjectByName(name: string): Project | null {
    let projectFind = null;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name === name) {
        projectFind = this.projects[i];
      }
    }

    return projectFind;
  }

  createProject(project: Project) {
    let projectNameAlreadyUsed = false;

    console.log('Appelle createProject');
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name === project.name) {
        projectNameAlreadyUsed = true;
      }
    }
    if (projectNameAlreadyUsed) {
      console.log('Le nom du projet est déjà utilisé');
      return false;
    } else {
      // ajouter un project à la liste des projects
      // this.projects.push(project);
      this.httpClient
        .post('http://localhost:3000/project/create', project)
        .subscribe(sucess => {
          if (sucess) {
            console.log('inscription finalisée');
            // verifier ce qu'il y a dans le tableau après inscription (sans renouveler la page)
            this.refreshProjects();
            return true;
          }
          return false;
        });

      this.refreshProjects();
      return true;
    }
  }
}
