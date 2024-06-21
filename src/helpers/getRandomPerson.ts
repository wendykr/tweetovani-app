import { PersonStructure } from '../types/Person';

export const getRandomPerson = (
  persons: PersonStructure[]
): PersonStructure => {
  const randomIndex = Math.floor(Math.random() * persons.length);
  return persons[randomIndex];
};
