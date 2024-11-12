import { Follow } from '../Follow/Follow';
import { Search } from '../Search/Search';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__head">
        <Search />
      </div>
      <Follow />
    </aside>
  );
};
