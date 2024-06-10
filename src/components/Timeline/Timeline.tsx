import { Message } from '../Message/Message';
import MessageStructure from '../../model/Message';
import './Timeline.css';
import { PersonStructure } from '../../model/Person';

interface TimelineProps {
  messagesData: MessageStructure[];
  randomPerson: PersonStructure;
  onClickLike: (messageId: number) => void;
  onClickBookmark: (messageId: number) => void;
  onClickDelete: (messageId: number) => void;
}

export const Timeline = ({
  messagesData,
  onClickLike,
  onClickBookmark,
  onClickDelete,
  randomPerson,
}: TimelineProps) => {

  const sortedMessages = messagesData.sort((a, b) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  return (
    <div className="timeline">
      {messagesData && messagesData.length > 0 ? (
        sortedMessages.map((message) => (
          <Message
            key={message.id}
            message={message}
            onClickLike={onClickLike}
            onClickBookmark={onClickBookmark}
            onClickDelete={onClickDelete}
            randomPerson={randomPerson}
          />
        ))
      ) : (
        <div className="timeline__empty">
          <h3>Zatím se nic neděje</h3>
          <p>... ale můžeš to změnit tím, že něco tweetneš :)</p>
        </div>
      )}
    </div>
  );
};