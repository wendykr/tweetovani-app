import './Message.css';
import MessageStructure from '../../model/Message';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';

interface MessageProps {
  message: MessageStructure;
  onClickLike: (messageId: number) => void;
  onClickBookmark: (messageId: number) => void;
  onClickDelete: (messageId: number) => void;
}

export const Message = ({ message, onClickLike, onClickBookmark, onClickDelete }: MessageProps) => {
  return (
    <article className="message" key={message.id}>
      <div className="message__avatar">
        <img src={message.avatar} alt="" />
      </div>
      <div className="message__content">
        <header className="message__header">
          <span className="message__name">{message.name}</span>
          <span className="message__handle">{message.handle}</span>
          <span className="message__time">{message.time}</span>
        </header>
        <div className="message__text">{message.text}</div>
        <footer className="message__footer">
          <button
            className="icon-button icon-button--rosa"
            onClick={() => onClickLike(message.id)}
            title="Miluju to"
          >
            <span className="icon-button__icon">
              <FaRegHeart className="message__icon" />
            </span>
            {message.like}
          </button>
          <button
            className="icon-button icon-button--blue"
            onClick={() => onClickBookmark(message.id)}
            title={message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'}
          >
            <span className="icon-button__icon">
              {message.bookmark ? (
                <FaBookmark className="message__icon" />
              ) : (
                <FaRegBookmark className="message__icon" />
              )}
            </span>
            {message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'}
          </button>
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
        </footer>
      </div>
    </article>
  );
};