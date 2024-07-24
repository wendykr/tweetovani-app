import { Menu } from '../Menu/Menu';
import { UserCard } from '../UserCard/UserCard';
import './Navigation.css';

export const Navigation = () => {
  return (
    <aside className="navigation">
      <Menu />
      <UserCard />
    </aside>
  );
};
