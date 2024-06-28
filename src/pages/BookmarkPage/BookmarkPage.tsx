import { useContext } from 'react';
import { ProfileMessage } from '../../components/ProfileMessage/ProfileMessage';
import { MessageContext } from '../../context/MessageContext';
import { getSortedMessages } from '../../helpers/getSortedMessages';
import './BookmarkPage.css';
import { FaRegBookmark } from 'react-icons/fa';

export const BookmarkPage = () => {
      const { messages } = useContext(MessageContext);
  const filterMessages = messages.filter(
    (message) => message.bookmark === true
  );

  const sortedMessages = getSortedMessages(filterMessages, 'bookmarkedAt');

  return (
    <>
      {filterMessages.length > 0 ? (
        sortedMessages.map((message) => (
          <ProfileMessage
            key={message.id}
            message={message}
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
