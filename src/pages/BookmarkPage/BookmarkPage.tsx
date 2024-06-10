import { Timeline } from '../../components/Timeline/Timeline';
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

  return (
    <>
      {filterMessagesData.length > 0 ? (
        <Timeline
          messagesData={filterMessagesData}
          onClickLike={handleClickLike}
          onClickBookmark={handleClickBookmark}
          onClickDelete={handleClickDelete}
        />
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