import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../../services/person';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './detail-person.component.html',
})
export class DetailPersonComponent implements OnInit {
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  // s'il arrive a le recupérer c'est une update sinon c'est une create
  ngOnInit(): void {
    const idPersonString = this.route.snapshot.params['id'];
    console.log('idPersonString =', idPersonString);
    //typeof pour visualiser un type
    console.log('typeof idPersonString', typeof idPersonString);

    const idPerson = Number(idPersonString);
    if (!isNaN(idPerson)) {
      this.person = this.personService.getPersonById(idPerson);
      console.log('this.persons =', this.person);
    }
  }

  delete() {
    if (this.person && this.person.id) {
      this.personService.delete(this.person.id);
    }
    this.router.navigateByUrl('/person');
  }
}
