import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PersonService } from '../services/person.service';

export const personsResolver: ResolveFn<Object> = (route, state) => {
  return inject(PersonService).getAllPersons();
};
