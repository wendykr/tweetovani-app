import './Search.css';
import { IoSearch } from 'react-icons/io5';
import { useSearch } from '../../context/SearchContext';

export const Search = () => {
  const { searchQuery, onSearchChange } = useSearch();

  return (
    <form className="search">
      <label className="search__label" htmlFor="searchInput">
        <IoSearch className="search__icon" />
      </label>
      <input
        className="search__input"
        type="text"
        id="searchInput"
        placeholder="Hledat"
        onChange={onSearchChange}
        value={searchQuery}
      />
    </form>
  );
};
