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
      name: 'Basic Computer Skills Workshop',
      description:
        'Host a series of workshops to teach basic computer skills such as using email, browsing the internet, and using word processing software. Sarah will lead the workshops, with support from David and Emily.',
      startDate: '25/02/2024',
      endDate: '27/02/2024',
      personnes: ['Sarah', 'David', 'Emily'],
    },
    {
      name: 'Tech Support for Seniors',
      description:
        'Provide personalized tech support sessions for seniors to help them navigate their computers, smartphones, and tablets. James will coordinate the sessions, while Lisa and Michael will assist the seniors.',
      startDate: '15/01/2011',
      endDate: '17/01/2011',
      personnes: ['James', 'Lisa', 'Michael'],
    },
    {
      name: 'Coding Club for Kids',
      description:
        'Start a coding club for kids to learn programming basics in a fun and interactive way. Emma will lead the club, with help from Ethan and Olivia.',
      startDate: '25/08/2020',
      endDate: '27/08/2020',
      personnes: ['Michael', 'David', 'Emma'],
    },
    {
      name: 'Website Building Workshop',
      description:
        'Conduct a workshop to teach participants how to build their own websites using user-friendly platforms. Thomas will lead the workshop, with support from Rachel and Benjamin.',
      startDate: '02/09/2023',
      endDate: '29/08/2023',
      personnes: ['Thomas', 'David', 'Emma', 'Quentin'],
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
