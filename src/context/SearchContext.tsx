import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SearchContextData {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextData>({
  searchQuery: '',
  setSearchQuery: () => {},
  onSearchChange: () => {},
});

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        onSearchChange,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
