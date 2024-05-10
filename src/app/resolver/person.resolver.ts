import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PersonService } from '../services/person.service';
import { Person } from '../services/person';

export const personResolver: ResolveFn<Person | undefined> = (route, state) => {
  const IdString = route.paramMap.get('id');
  return inject(PersonService).getPersonById(IdString || '');
};
