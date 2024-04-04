import { Injectable } from '@angular/core';
import { Project } from '../page/project/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      name: 'toto',
      description: 'description',
      startDate: '25/08/2000',
      endDate: '27/08/2000',
      personnes: ['toto', 'tata', 'titi'],
    },
    {
      name: 'tito',
      description: 'description',
      startDate: '25/08/2000',
      endDate: '27/08/2000',
      personnes: ['toto', 'tata', 'titi'],
    },
    {
      name: 'totti',
      description: 'description',
      startDate: '25/08/2000',
      endDate: '27/08/2000',
      personnes: ['toto', 'tata', 'titi'],
    },
    {
      name: 'tata',
      description: 'description',
      startDate: '25/08/2000',
      endDate: '27/08/2000',
      personnes: ['toto', 'tata', 'titi'],
    },
  ];

  constructor() {}

  getAllProjects(): Project[] {
    console.log(this.projects);
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
}
