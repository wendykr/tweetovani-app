import './App.css';
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
    </div>
  )
}

export default App