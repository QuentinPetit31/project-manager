import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../../services/person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './detail-person.component.html',
})
export class DetailPersonComponent implements OnInit {
  person?: Person;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  // s'il arrive a le recupérer c'est une update sinon c'est une create
  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.person = data['person'];
  }

  delete() {
    if (this.person?.id) {
      this.personService.delete(this.person.id).subscribe(() => {
        this.router.navigateByUrl('/person');
      });
    }
  }
}
