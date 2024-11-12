import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { PopUp } from './components/PopUp/PopUp';
import { useSearch } from './context/SearchContext';
import { useEffect } from 'react';
import { usePopUp } from './context/PopUpContext';

function App() {
  const { onSetSearchQuery } = useSearch();
  const { isShowPopUp } = usePopUp();

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    onSetSearchQuery('');
  }, [path]);

  return (
    <>
      <div className="container">
        <Navigation />
        <main className="main">
          <h1 className="page-title">Tweetování</h1>
          <Outlet />
        </main>
        <Sidebar />
      </div>
      {isShowPopUp && <PopUp />}
    </>
  );
}

export default App;
