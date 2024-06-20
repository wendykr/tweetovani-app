import { Menu } from '../Menu/Menu';
import { UserCard } from '../UserCard/UserCard';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Menu />
      <UserCard />
    </aside>
  );
};
