import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { PersonStructure } from '../types/Person';

const initialUser: PersonStructure = {
  id: 0,
  name: '',
  handle: '',
  avatar: '',
  follow: false,
};

interface UserContextData {
  randomPerson: PersonStructure;
  setRandomPerson: React.Dispatch<React.SetStateAction<PersonStructure>>;
}

export const UserContext = createContext<UserContextData>({
  randomPerson: initialUser,
  setRandomPerson: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [randomPerson, setRandomPerson] =
    useState<PersonStructure>(initialUser);

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
