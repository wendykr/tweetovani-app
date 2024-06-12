import './Search.css';
import { CiSearch } from 'react-icons/ci';

export const Search = () => {
  return (
    <form className="search">
      <label className="search__label" htmlFor="searchInput">
        <CiSearch className="search__icon" />
      </label>
      <input
        className="search__input"
        type="text"
        id="searchInput"
        placeholder="Hledat"
      />
    </form>
  );
};
