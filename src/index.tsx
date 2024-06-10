import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LikePage } from './pages/LikePage/LikePage';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';
import { messages } from './data/messages';
import MessageStructure from './model/Message';

const Main = () => {
  const [messagesData, setMessagesData] = useState<MessageStructure[]>([]);

  useEffect(() => {
    const storedMessagesData = sessionStorage.getItem('messagesData');
    if (storedMessagesData) {
      setMessagesData(JSON.parse(storedMessagesData));
    } else {
      setMessagesData(messages);
      sessionStorage.setItem('messagesData', JSON.stringify(messages));
    }
  }, []);

  const handleClickLike = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, like: message.like + 1 };
        }
        return message;
      });
      sessionStorage.setItem('messagesData', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  const handleClickBookmark = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, bookmark: !message.bookmark };
        }
        return message;
      });
      sessionStorage.setItem('messagesData', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  const handleClickDelete = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const currentMessages = prevMessages.filter(
        (message) => message.id !== messageId
      );
      sessionStorage.setItem('messagesData', JSON.stringify(currentMessages));
      return currentMessages;
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={
            <HomePage
              messagesData={messagesData}
              setMessagesData={setMessagesData}
              handleClickLike={handleClickLike}
              handleClickBookmark={handleClickBookmark}
              handleClickDelete={handleClickDelete}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkPage
              messagesData={messagesData}
              handleClickLike={handleClickLike}
              handleClickBookmark={handleClickBookmark}
              handleClickDelete={handleClickDelete}
            />
          }
        />
        <Route
          path="/like"
          element={
            <LikePage
              messagesData={messagesData}
              handleClickLike={handleClickLike}
              handleClickBookmark={handleClickBookmark}
              handleClickDelete={handleClickDelete}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const rootElement: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(<Main />);