import { Message } from '../../components/Message/Message';
import MessageStructure from '../../model/Message';
import './BookmarkPage.css';
import { FaRegBookmark } from 'react-icons/fa';

interface BookmarkPageProps {
  messagesData: MessageStructure[];
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const BookmarkPage = ({
  messagesData,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: BookmarkPageProps) => {
  const filterMessagesData = messagesData.filter(
    (message) => message.bookmark === true
  );

  const sortedMessages = filterMessagesData.sort((a, b) => {
    return (
      new Date(b.timeBookmark).getTime() - new Date(a.timeBookmark).getTime()
    );
  });

  return (
    <>
      {filterMessagesData.length > 0 ? (
        sortedMessages.map((message) => (
          <Message
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
