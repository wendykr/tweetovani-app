import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LikePage } from './pages/LikePage/LikePage';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';
import { messages } from './data/messages';
import MessageStructure from './model/Message';

const Main = () => {
  const [messagesData, setMessagesData] = useState<MessageStructure[]>([]);

  useEffect(() => {
    const storedMessagesData = localStorage.getItem('messagesData');
    if (storedMessagesData) {
      setMessagesData(JSON.parse(storedMessagesData));
    } else {
      setMessagesData(messages);
      localStorage.setItem('messagesData', JSON.stringify(messages));
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={
            <HomePage messagesData={messagesData} setMessagesData={setMessagesData} />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkPage />
          }
        />
        <Route
          path="/like"
          element={
            <LikePage />
          }
        />
      </Route>
    ),
  );
return <RouterProvider router={router} />;
}

const rootElement: HTMLElement = document.getElementById('root')!;
  ReactDOM.createRoot(rootElement).render(<Main />);