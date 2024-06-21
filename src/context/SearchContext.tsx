import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from 'react';

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

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchQuery, setSearchQuery] = useState('');

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
