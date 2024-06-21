import { PersonStructure } from '../types/Person';

export const getRandomPerson = (persons: PersonStructure[]): PersonStructure =>
  persons[Math.floor(Math.random() * persons.length)];
