import { Message } from '../Message/Message';
import MessageStructure from '../../model/Message';
import './Timeline.css';

interface TimelineProps {
  messagesData: MessageStructure[];
  onClickLike: (messageId: number) => void;
  onClickBookmark: (messageId: number) => void;
  onClickDelete: (messageId: number) => void;
}

export const Timeline = ({ messagesData, onClickLike, onClickBookmark, onClickDelete }: TimelineProps) => {
  return (
    <div className="timeline">
      {messagesData && messagesData.length > 0 ? (
        messagesData.map((message) => (
          <Message
            key={message.id}
            message={message}
            onClickLike={onClickLike}
            onClickBookmark={onClickBookmark}
            onClickDelete={onClickDelete}
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