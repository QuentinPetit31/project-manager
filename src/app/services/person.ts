export type Job =
  | 'Web Developer'
  | 'Frontend Developer'
  | 'Backend Developer'
  | 'Designer Web'
  | 'Data Analyst'
  | 'UX Designer'
  | 'Cloud Architect'
  | 'Software Engineer'
  | 'Systems Analyst'
  | 'Network Administrator'
  | 'Cybersecurity Specialist'
  | 'Intern';

export const Jobs: Job[] = [
  'Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Designer Web',
  'Data Analyst',
  'UX Designer',
  'Cloud Architect',
  'Software Engineer',
  'Systems Analyst',
  'Network Administrator',
  'Cybersecurity Specialist',
  'Intern',
];

export interface Person {
  id?: string;
  firstName: string;
  lastName: string;
  job: Job;
}
