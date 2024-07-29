import { useContext, useEffect } from 'react';
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
import { getRandomPerson } from './helpers/getRandomPerson.ts';
import { SearchProvider } from './context/SearchContext.tsx';
import { UserContext, UserProvider } from './context/UserContext.tsx';
import { MessageContext, MessageProvider } from './context/MessageContext.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';

const Main = () => {
  const { onSetMessages } = useContext(MessageContext);
  const { onSetRandomPerson } = useContext(UserContext);

  useEffect(() => {
    const storedMessages = sessionStorage.getItem('messages');
    if (storedMessages) {
      onSetMessages(JSON.parse(storedMessages));
    } else {
      onSetMessages(initialMessages);
      sessionStorage.setItem('messages', JSON.stringify(initialMessages));
    }

    const storedRandomPerson = sessionStorage.getItem('randomPerson');
    if (storedRandomPerson) {
      onSetRandomPerson(JSON.parse(storedRandomPerson));
    } else {
      const randomPerson = getRandomPerson(persons);
      onSetRandomPerson(randomPerson);
      sessionStorage.setItem('randomPerson', JSON.stringify(randomPerson));
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const rootElement: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(
  <>
    <UserProvider>
      <MessageProvider>
        <SearchProvider>
          <ToastContainer />
          <Main />
        </SearchProvider>
      </MessageProvider>
    </UserProvider>
  </>
);
