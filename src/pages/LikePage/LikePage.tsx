import { useContext } from 'react';
import { ProfileMessage } from '../../components/ProfileMessage/ProfileMessage';
import { MessageContext } from '../../context/MessageContext';
import { getSortedMessages } from '../../helpers/getSortedMessages';
import './LikePage.css';
import { FaRegHeart } from 'react-icons/fa';

interface LikePageProps {
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const LikePage = ({
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: LikePageProps) => {
  const { messages } = useContext(MessageContext);
  const filterMessages = messages.filter(
    (message) => message.likeCount > 0 && message.like
  );

  const sortedMessages = getSortedMessages(filterMessages, 'likedAt');

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
            <FaRegHeart className="icon-heart" />
          </p>
        </div>
      )}
    </>
  );
};
