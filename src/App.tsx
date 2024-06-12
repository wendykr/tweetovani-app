import './App.css';
import { Search } from './components/Search/Search';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <h1 className="page-title">Tweetování</h1>
        <Outlet />
      </main>
      <Search />
    </div>
  );
}

export default App;
