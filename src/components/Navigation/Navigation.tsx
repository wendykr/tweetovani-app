import { usePopUp } from '../../context/PopUpContext';
import { Menu } from '../Menu/Menu';
import { UserCard } from '../UserCard/UserCard';
import './Navigation.css';
import { FaFeatherAlt } from 'react-icons/fa';

export const Navigation = () => {
  const { onClickPopUp } = usePopUp();

  return (
    <nav className="navigation">
      <div className="navigation__head">
        <Menu />
        <div className="navigation__icon--button" onClick={onClickPopUp}>
          <FaFeatherAlt className="navigation__icon" />
        </div>
        <button className="buttonPost" onClick={onClickPopUp}>
          Tweetni to
        </button>
      </div>
      <UserCard />
    </nav>
  );
};
