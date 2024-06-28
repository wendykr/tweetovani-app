import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/HomePage/HomePage';
import { LikePage } from './pages/LikePage/LikePage';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';
import { messages as initialMessages } from './data/messages';
import { persons } from './data/persons';
import Message from './types/Message.ts';
import dayjs from 'dayjs';
import { getRandomPerson } from './helpers/getRandomPerson.ts';
import { SearchProvider } from './context/SearchContext.tsx';
import { UserContext, UserProvider } from './context/UserContext.tsx';
import { useToast } from './hooks/useToast.tsx';

const Main = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { randomPerson, setRandomPerson } = useContext(UserContext);
  const { showToast } = useToast();

  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');

  useEffect(() => {
    const storedMessages = sessionStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages(initialMessages);
      sessionStorage.setItem('messages', JSON.stringify(initialMessages));
    }

    const storedRandomPerson = sessionStorage.getItem('randomPerson');
    if (storedRandomPerson) {
      setRandomPerson(JSON.parse(storedRandomPerson));
    } else {
      const randomPerson = getRandomPerson(persons);
      setRandomPerson(randomPerson);
      sessionStorage.setItem('randomPerson', JSON.stringify(randomPerson));
    }
  }, [setRandomPerson]);

  const onSetMessages = (messages: Message[]) => {
    setMessages(messages);
  };

  const handleClickLike = (messageId: number) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          if (message.like) {
            return {
              ...message,
              likeCount: message.likeCount - 1,
              like: false,
              likedAt: now,
            };
          } else {
            return {
              ...message,
              likeCount: message.likeCount + 1,
              like: true,
              likedAt: now,
            };
          }
        }
        return message;
      });
      sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  const handleClickBookmark = (messageId: number) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (message.id === messageId) {
          const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
          return {
            ...message,
            bookmark: !message.bookmark,
            bookmarkedAt: message.bookmark ? '0000-00-00 00:00:00' : now,
          };
        }
        return message;
      });
      sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    const message = messages.find((msg) => msg.id === messageId);
    if (message) {
      message.bookmark
        ? showToast('Odebráno ze Záložky.')
        : showToast('Přidáno do Záložky.');
    }
  };

  const handleClickDelete = (messageId: number) => {
    setMessages((prevMessages) => {
      const currentMessages = prevMessages.filter(
        (message) =>
          !(message.id === messageId && message.name === randomPerson.name)
      );
      sessionStorage.setItem('messages', JSON.stringify(currentMessages));
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
              messages={messages}
              onSetMessages={onSetMessages}
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
              messages={messages}
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
              messages={messages}
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
    <UserProvider>
      <SearchProvider>
        <ToastContainer />
        <Main />
      </SearchProvider>
    </UserProvider>
  </>
);
