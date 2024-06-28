import React, {
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
  setRandomPerson: React.Dispatch<React.SetStateAction<Person>>;
}

export const UserContext = createContext<UserContextData>({
  randomPerson: initialUser,
  setRandomPerson: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [randomPerson, setRandomPerson] =
    useState<Person>(initialUser);

  return (
    <UserContext.Provider
      value={{
        randomPerson,
        setRandomPerson,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
