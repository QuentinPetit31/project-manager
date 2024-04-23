import { Injectable, OnInit } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.refreshProjects();
  }

  refreshProjects(): void {
    console.log('refreshProjects');

    this.httpClient
      .get<Project[]>('http://localhost:3000/projects')
      .subscribe(projects => {
        console.log('refreshProjects projects  =>', projects);
        this.projects = projects;
      });
  }

  getAllProjects(): Project[] {
    console.log('getAllProjects', this.projects);
    return this.projects;
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
        .post('http://localhost:3000/projects/create', project)
        .subscribe(sucess => {
          if (sucess) {
            console.log('inscription finalisée');
            // verifier ce qu'il y a dans le tableau après inscription (sans renouveler la page)
            this.refreshProjects();
            return true;
          }
          return false;
        });
      return true;
    }
  }

  updateProject(oldName: string, project: Project) {
    let projectNameAlreadyUsed = false;

    if (oldName !== project.name) {
      // need to check if new name is already used

      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].name === project.name) {
          projectNameAlreadyUsed = true;
        }
      }
    }

    console.log('Appelle createProject');

    if (projectNameAlreadyUsed) {
      console.log('Le nom du projet est déjà utilisé');
      return false;
    } else {
      // ajouter un project à la liste des projects
      // this.projects.push(project);
      this.httpClient
        .put('http://localhost:3000/projects/' + oldName, project)
        .subscribe(sucess => {
          if (sucess) {
            console.log('modification du projet finalisée');
            // verifier ce qu'il y a dans le tableau après inscription (sans renouveler la page)
            this.refreshProjects();
            return true;
          }
          return false;
        });
      return true;
    }
  }

  delete(name: string): void {
    console.log('delete');

    this.httpClient
      .delete<boolean>('http://localhost:3000/projects/' + name)
      .subscribe(succes => {
        console.log('refreshProjects projects  =>', succes);
        if (succes) {
          this.refreshProjects();
          this.router.navigateByUrl('/project');
        }
      });
  }
}
