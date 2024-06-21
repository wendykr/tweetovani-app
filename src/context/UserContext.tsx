import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { PersonStructure } from '../types/Person';

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
    follow: false,
  },
  setRandomPerson: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [randomPerson, setRandomPerson] = useState<PersonStructure>({
    id: 0,
    name: '',
    handle: '',
    avatar: '',
    follow: false,
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
