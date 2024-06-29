import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { Person } from '../types/Person';

const initialUser: Person = {
  id: 0,
  name: '',
  handle: '',
  avatar: '',
  follow: false,
};

interface UserContextData {
  randomPerson: Person;
  onSetRandomPerson: (person: Person) => void;
}

export const UserContext = createContext<UserContextData>({
  randomPerson: initialUser,
  onSetRandomPerson: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [randomPerson, setRandomPerson] =
    useState<Person>(initialUser);

  const onSetRandomPerson = (person: Person) => {
    setRandomPerson(person);
  }

  return (
    <UserContext.Provider
      value={{
        randomPerson,
        onSetRandomPerson
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
