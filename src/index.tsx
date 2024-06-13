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
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/HomePage/HomePage';
import { LikePage } from './pages/LikePage/LikePage';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';
import { messages } from './data/messages';
import { persons } from './data/persons';
import MessageStructure from './model/Message';
import { PersonStructure } from './model/Person.ts';
import dayjs from 'dayjs';
import { getRandomPerson } from './helpers/getRandomPerson.ts';

const Main = () => {
  const [messagesData, setMessagesData] = useState<MessageStructure[]>([]);
  const [randomPerson, setRandomPerson] = useState<PersonStructure>({
    id: 0,
    name: '',
    handle: '',
    avatar: '',
    follow: false,
  });

  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');

  useEffect(() => {
    const storedMessagesData = sessionStorage.getItem('messagesData');
    if (storedMessagesData) {
      setMessagesData(JSON.parse(storedMessagesData));
    } else {
      setMessagesData(messages);
      sessionStorage.setItem('messagesData', JSON.stringify(messages));
    }

    const storedRandomPerson = sessionStorage.getItem('randomPerson');
    if (storedRandomPerson) {
      setRandomPerson(JSON.parse(storedRandomPerson));
    } else {
      const randomPerson = getRandomPerson(persons);
      setRandomPerson(randomPerson);
      sessionStorage.setItem('randomPerson', JSON.stringify(randomPerson));
    }
  }, []);

  const handleClickLike = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          if (message.like) {
            return {
              ...message,
              likeCount: message.likeCount - 1,
              like: false,
              timeLike: now,
            };
          } else {
            return {
              ...message,
              likeCount: message.likeCount + 1,
              like: true,
              timeLike: now,
            };
          }
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
          const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
          return {
            ...message,
            bookmark: !message.bookmark,
            timeBookmark: message.bookmark ? '0000-00-00 00:00:00' : now,
          };
        }
        return message;
      });
      sessionStorage.setItem('messagesData', JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    const message = messagesData.find((msg) => msg.id === messageId);
    if (message) {
      if (!message.bookmark) {
        toast(`Přidáno do Záložky.`, {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: 'light',
          transition: Slide,
          closeButton: false,
          style: {
            width: '220px',
            height: '20px',
            background: '#1da1f2',
            color: '#ffffff',
            fontSize: '18px',
            textAlign: 'center',
          },
        });
      } else {
        toast(`Odebráno ze Záložky.`, {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: 'light',
          transition: Slide,
          closeButton: false,
          style: {
            width: '220px',
            height: '20px',
            background: '#1da1f2',
            color: '#ffffff',
            fontSize: '18px',
            textAlign: 'center',
          },
        });
      }
    }
  };

  const handleClickDelete = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const currentMessages = prevMessages.filter((message) => {
        if (message.id === messageId && message.name === randomPerson.name) {
          return false;
        }
        return true;
      });
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
              randomPerson={randomPerson}
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
              randomPerson={randomPerson}
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
              randomPerson={randomPerson}
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
ReactDOM.createRoot(rootElement).render(
  <>
    <ToastContainer />
    <Main />
  </>
);
