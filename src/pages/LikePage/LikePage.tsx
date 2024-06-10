import { Timeline } from '../../components/Timeline/Timeline';
import MessageStructure from '../../model/Message';
import './LikePage.css';
import { FaRegHeart } from 'react-icons/fa';

interface LikePageProps {
  messagesData: MessageStructure[];
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const LikePage = ({
  messagesData,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: LikePageProps) => {

  const filterMessagesData = messagesData.filter(
    (message) => message.like > 0
  );

  return (
    <>
      {messagesData ? (
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
            <FaRegHeart className="icon-heart" />
          </p>
        </div>
      )}
    </>
  );
};