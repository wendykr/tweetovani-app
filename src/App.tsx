import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarRight } from './components/SidebarRight/SidebarRight';
import { useSearch } from './context/SearchContext';
import { useEffect } from 'react';

function App() {
  const { setSearchQuery } = useSearch();

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setSearchQuery('');
  }, [path, setSearchQuery]);

  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <h1 className="page-title">Tweetování</h1>
        <Outlet />
      </main>
      <SidebarRight />
    </div>
  );
}

export default App;
