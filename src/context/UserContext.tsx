import React, { ReactNode, createContext, useContext, useState } from 'react';
import { PersonStructure } from '../model/Person';

interface UserContextData {
  randomPerson: PersonStructure;
  setRandomPerson: React.Dispatch<React.SetStateAction<PersonStructure>>;
}

export const UserContext = createContext<UserContextData>({
  randomPerson: {
    id: 0,
    name: '',
    handle: '',
    avatar: '',
  },
  setRandomPerson: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [randomPerson, setRandomPerson] = useState<PersonStructure>({
    id: 0,
    name: '',
    handle: '',
    avatar: '',
  });

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
