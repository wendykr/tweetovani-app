import { Person } from '../types/Person';

export const getRandomPerson = (persons: Person[]): Person =>
  persons[Math.floor(Math.random() * persons.length)];
