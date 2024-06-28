import { ProfileMessage } from '../ProfileMessage/ProfileMessage';
import Message from '../../types/Message';
import './Timeline.css';
import { useSearch } from '../../context/SearchContext';

interface TimelineProps {
  messagesData: Message[];
  onClickLike: (messageId: number) => void;
  onClickBookmark: (messageId: number) => void;
  onClickDelete: (messageId: number) => void;
}

export const Timeline = ({
  messagesData,
  onClickLike,
  onClickBookmark,
  onClickDelete,
}: TimelineProps) => {
  const { searchQuery } = useSearch();
  const sortedMessages = messagesData.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );

  const filterMessagesData = (
    messagesData: Message[],
    searchTerm: string
  ) =>
    messagesData.filter((message) =>
      message.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredMessagesData = filterMessagesData(sortedMessages, searchQuery);

  return (
    <div className="timeline">
      {messagesData && messagesData.length > 0 ? (
        filteredMessagesData.length > 0 ? (
          filteredMessagesData.map((message) => (
            <ProfileMessage
              key={message.id}
              message={message}
              onClickLike={onClickLike}
              onClickBookmark={onClickBookmark}
              onClickDelete={onClickDelete}
            />
          ))
        ) : (
          <div className="timeline__empty">
            <h3>Žádné výsledky hledání</h3>
            <p>... ale můžeš to zkusit s jinými slovy :)</p>
          </div>
        )
      ) : (
        <div className="timeline__empty">
          <h3>Zatím se nic neděje</h3>
          <p>... ale můžeš to změnit tím, že něco tweetneš :)</p>
        </div>
      )}
    </div>
  );
};
