import { Menu } from '../Menu/Menu';
import { UserCard } from '../UserCard/UserCard';
import './Navigation.css';
import { FaFeatherAlt } from 'react-icons/fa';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__head">
        <Menu />
        <div className="navigation__icon--button">
          <FaFeatherAlt className="navigation__icon" />
        </div>
        <button className="buttonPost">Tweetni to</button>
      </div>
      <UserCard />
    </nav>
  );
};
