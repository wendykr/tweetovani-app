import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { SidebarRight } from './components/SidebarRight/SidebarRight';

function App() {
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
