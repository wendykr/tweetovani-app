import { Follow } from '../Follow/Follow';
import { Search } from '../Search/Search';
import './SidebarRight.css';

export const SidebarRight = () => {
  return (
    <aside className="sidebar-right">
      <div className="sidebar-right__head">
        <Search />
      </div>
      <Follow />
    </aside>
  );
};
