import './ProfileMessage.scss';
import Message from '../../types/Message';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import dayjs from 'dayjs';
import { useUser } from '../../context/UserContext';
import { useMessage } from '../../context/MessageContext';

interface ProfileMessageProps {
  message: Message;
}

export const ProfileMessage = ({ message }: ProfileMessageProps) => {
  const { randomPerson } = useUser();
  const { handleClickBookmark, handleClickDelete, handleClickLike } =
    useMessage();
  const countDay = (time: string) => {
    const difference = dayjs().diff(dayjs(time), 'hour');

    if (difference >= 24) {
      const days = Math.floor(difference / 24);
      return `${days}d`;
    } else {
      return `${difference}h`;
    }
  };

  return (
    <article className="message" key={message.id}>
      <div className="message__avatar">
        <picture>
          <source srcSet={message.avatarAvif} type="image/avif" />
          <source srcSet={message.avatarWebp} type="image/webp" />
          <img
            src={message.avatar}
            alt={`Profilová fotka uživatele ${message.name}`}
            width="60"
            height="60"
          />
        </picture>
      </div>
      <div className="message__content">
        <header className="message__header">
          <span className="message__name">{message.name}</span>
          <div className="message__header--">
            <span className="message__handle">{message.handle}</span>
            <span className="message__time" title={message.time}>
              {countDay(message.time)}
            </span>
          </div>
        </header>
        <div className="message__text">{message.text}</div>
        <footer className="message__footer">
          <button
            className="icon-button icon-button--rosa"
            onClick={() => handleClickLike(message.id)}
            title="Miluju to"
          >
            <span className="icon-button__icon">
              {message.like ? (
                <FaHeart className="message__icon fill-rosa" />
              ) : (
                <FaRegHeart className="message__icon" />
              )}
            </span>
            {message.likeCount}
          </button>
          <button
            className="icon-button icon-button--blue"
            onClick={() => handleClickBookmark(message.id)}
            title={
              message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'
            }
          >
            <span className="icon-button__icon">
              {message.bookmark ? (
                <FaBookmark className="message__icon fill-blue" />
              ) : (
                <FaRegBookmark className="message__icon" />
              )}
            </span>
            <span className="message__icon--text">
              {message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'}
            </span>
          </button>
          {message.name === randomPerson.name && (
            <button
              className="icon-button icon-button--red"
              onClick={() => handleClickDelete(message.id)}
              title="Smazat zprávu"
            >
              <span className="icon-button__icon">
                <FiTrash className="message__icon" />
              </span>
              <span className="message__icon--text">Smazat zprávu</span>
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};
