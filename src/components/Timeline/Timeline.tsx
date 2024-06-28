import { ProfileMessage } from '../ProfileMessage/ProfileMessage';
import Message from '../../types/Message';
import './Timeline.css';
import { useSearch } from '../../context/SearchContext';
import { getSortedMessages } from '../../helpers/getSortedMessages';
import { MessageContext } from '../../context/MessageContext';
import { useContext } from 'react';

export const Timeline = () => {
  const { messages } = useContext(MessageContext);
  const { searchQuery } = useSearch();
  const sortedMessages = getSortedMessages(messages, 'time');

  const filterMessages = (
    messages: Message[],
    searchTerm: string
  ) =>
    messages.filter((message) =>
      message.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredMessages = filterMessages(sortedMessages, searchQuery);

  return (
    <div className="timeline">
      {messages && messages.length > 0 ? (
        filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <ProfileMessage
              key={message.id}
              message={message}
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
