import { ProfileMessage } from '../../components/ProfileMessage/ProfileMessage';
import { useMessage } from '../../context/MessageContext';
import { getSortedMessages } from '../../helpers/getSortedMessages';
import './LikePage.scss';
import { FaRegHeart } from 'react-icons/fa';

export const LikePage = () => {
  const { messages } = useMessage();
  const filterMessages = messages.filter(
    (message) => message.likeCount > 0 && message.like
  );

  const sortedMessages = getSortedMessages(filterMessages, 'likedAt');

  return (
    <>
      {filterMessages.length > 0 ? (
        sortedMessages.map((message) => (
          <ProfileMessage key={message.id} message={message} />
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
