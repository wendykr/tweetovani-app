import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from 'react';

interface SearchContextData {
  searchQuery: string;
  onSetSearchQuery: (query: string) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextData>({
  searchQuery: '',
  onSetSearchQuery: () => {},
  onSearchChange: () => {},
});

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSetSearchQuery = (query: string) => {
    setSearchQuery(query);
  }

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        onSearchChange,
        onSetSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
