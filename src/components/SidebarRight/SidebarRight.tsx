import { Follow } from '../Follow/Follow';
import { Search } from '../Search/Search';
import './SidebarRight.css';

export const SidebarRight = () => {
  return (
    <aside className="sidebar-right">
      <Follow />
      <Search />
    </aside>
  );
};
