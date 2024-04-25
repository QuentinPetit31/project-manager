import { Person } from './person';

export interface Project {
  id?: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  persons: Person[];
}
