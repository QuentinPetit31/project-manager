import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../person/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './detail-person.component.html',
})
export class DetailPersonComponent implements OnInit {
  persons?: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  // s'il arrive a le recup c'est une update sinon c'est une create
  // a copier dans l'autre fichier
  ngOnInit(): void {
    const idPersons = this.route.snapshot.params['id'];
    console.log(idPersons);
    this.persons = this.personService.getPersonById(idPersons);
    console.log(this.persons);
  }

  delete() {
    if (this.persons && this.persons.id) {
      this.personService.delete(this.persons.id);
    }
  }
}
