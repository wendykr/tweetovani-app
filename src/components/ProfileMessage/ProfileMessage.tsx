import './ProfileMessage.css';
import Message from '../../types/Message';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

interface ProfileMessageProps {
  message: Message;
  onClickLike: (messageId: number) => void;
  onClickBookmark: (messageId: number) => void;
  onClickDelete: (messageId: number) => void;
}

export const ProfileMessage = ({
  message,
  onClickLike,
  onClickBookmark,
  onClickDelete,
}: ProfileMessageProps) => {
  const { randomPerson } = useContext(UserContext);
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
        <img
          src={message.avatar}
          alt={`Profilová fotka uživatele ${message.name}`}
          width="3em"
          height="auto"
        />
      </div>
      <div className="message__content">
        <header className="message__header">
          <span className="message__name">{message.name}</span>
          <span className="message__handle">{message.handle}</span>
          <span className="message__time" title={message.time}>
            {countDay(message.time)}
          </span>
        </header>
        <div className="message__text">{message.text}</div>
        <footer className="message__footer">
          <button
            className="icon-button icon-button--rosa"
            onClick={() => onClickLike(message.id)}
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
            onClick={() => onClickBookmark(message.id)}
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
            {message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'}
          </button>
          {message.name === randomPerson.name && (
            <button
              className="icon-button icon-button--red"
              onClick={() => onClickDelete(message.id)}
              title="Smazat zprávu"
            >
              <span className="icon-button__icon">
                <FiTrash className="message__icon" />
              </span>
              Smazat zprávu
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};
