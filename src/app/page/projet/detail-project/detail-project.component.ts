import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Project } from '../../../services/project';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './detail-project.component.html',
})
export class DetailProjectComponent implements OnInit {
  project?: Project;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'job'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // s'il arrive a le recupérer c'est une update sinon c'est une create
    const data = this.activatedRoute.snapshot.data;
    this.project = data['project'];
  }
  delete() {
    console.log('project=', this.project);
    if (this.project?.id) {
      this.projectService.delete(this.project.id).subscribe(() => {
        this.router.navigateByUrl('/project');
      });
    }
  }
}
