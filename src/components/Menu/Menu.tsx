import { NavLink } from 'react-router-dom';
import './Menu.css';
import { IoHomeOutline } from 'react-icons/io5';
import { IoIosHome } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

export const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__item menu__logo">
        <NavLink to="/" className="menu__link">
          <img className="menu__icon" src="icons/kiwi.svg" alt="Logo" />
        </NavLink>
      </div>
      <div className="menu__item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `menu__link ${isActive ? 'menu__link--active' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <IoIosHome className="menu__icon" />
              ) : (
                <IoHomeOutline className="menu__icon" />
              )}
              <span className="menu__text">Domů</span>
            </>
          )}
        </NavLink>
      </div>
      <div className="menu__item">
        <NavLink
          to="/bookmark"
          className={({ isActive }) =>
            `menu__link ${isActive ? 'menu__link--active' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <FaBookmark className="menu__icon" />
              ) : (
                <FaRegBookmark className="menu__icon" />
              )}
              <span className="menu__text">Záložky</span>
            </>
          )}
        </NavLink>
      </div>
      <div className="menu__item">
        <NavLink
          to="/like"
          className={({ isActive }) =>
            `menu__link ${isActive ? 'menu__link--active' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <FaHeart className="menu__icon" />
              ) : (
                <FaRegHeart className="menu__icon" />
              )}
              <span className="menu__text">Lajky</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  )
}