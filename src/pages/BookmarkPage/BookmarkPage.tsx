import { ProfileMessage } from '../../components/ProfileMessage/ProfileMessage';
import Message from '../../types/Message';
import './BookmarkPage.css';
import { FaRegBookmark } from 'react-icons/fa';

interface BookmarkPageProps {
  messages: Message[];
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const BookmarkPage = ({
  messages,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: BookmarkPageProps) => {
  const filterMessages = messages.filter(
    (message) => message.bookmark === true
  );

  const sortedMessages = filterMessages.sort(
    (a, b) =>
      new Date(b.bookmarkedAt).getTime() - new Date(a.bookmarkedAt).getTime()
  );

  return (
    <>
      {filterMessages.length > 0 ? (
        sortedMessages.map((message) => (
          <ProfileMessage
            key={message.id}
            message={message}
            onClickLike={handleClickLike}
            onClickBookmark={handleClickBookmark}
            onClickDelete={handleClickDelete}
          />
        ))
      ) : (
        <div className="bookmarkPage">
          <h3>Zatím tu nic nemáš</h3>
          <p>
            ... ale můžeš to změnit tím, že klikneš u příspěvků na ikonu{' '}
            <FaRegBookmark className="icon-bookmark" />
          </p>
        </div>
      )}
    </>
  );
};
