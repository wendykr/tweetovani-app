import { Message } from '../../components/Message/Message';
import MessageStructure from '../../model/Message';
import { PersonStructure } from '../../model/Person';
import './LikePage.css';
import { FaRegHeart } from 'react-icons/fa';

interface LikePageProps {
  messagesData: MessageStructure[];
  randomPerson: PersonStructure;
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const LikePage = ({
  messagesData,
  randomPerson,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: LikePageProps) => {
  const filterMessagesData = messagesData.filter((message) => message.likeCount > 0 && message.like);

  const sortedMessages = filterMessagesData.sort((a, b) => {
    return new Date(b.timeLike).getTime() - new Date(a.timeLike).getTime();
  });

  return (
    <>
      {filterMessagesData.length > 0 ? (
        sortedMessages.map((message) => (
          <Message
            key={message.id}
            message={message}
            randomPerson={randomPerson}
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
