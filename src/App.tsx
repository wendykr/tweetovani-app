import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useSearch } from './context/SearchContext';
import { useEffect } from 'react';

function App() {
  const { onSetSearchQuery } = useSearch();

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    onSetSearchQuery('');
  }, [path]);

  return (
    <div className="container">
      <Navigation />
      <main className="main">
        <h1 className="page-title">Tweetování</h1>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
