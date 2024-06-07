import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LikePage } from './pages/LikePage/LikePage';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/"
        element={
          <HomePage />
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

const rootElement: HTMLElement = document.getElementById('root')!;
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);