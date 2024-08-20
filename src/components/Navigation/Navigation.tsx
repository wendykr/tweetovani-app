import { Menu } from '../Menu/Menu';
import { UserCard } from '../UserCard/UserCard';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Menu />
      <UserCard />
    </nav>
  );
};
