import { Message } from '../Message/Message';
import './Timeline.css';
import MessageStructure from '../../model/message';
import { messages } from '../../data/messages';
import { useEffect, useState } from 'react';

export const Timeline = () => {
  const [messagesData, setMessagesData] = useState<MessageStructure[]>([]);

  useEffect(() => {
    setMessagesData(messages);
  }, []);

  const handleClickLike = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const updatedMessages = prevMessages.map(message => {
        if (message.id === messageId) {
          return { ...message, like: message.like + 1 };
        }
        return message;
      });
      return updatedMessages;
    });
  }

  const handleClickBookmark = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const updatedMessages = prevMessages.map(message => {
        if (message.id === messageId) {
          return { ...message, bookmark: !message.bookmark };
        }
        return message;
      });
      return updatedMessages;
    });
  }

  const handleClickDelete = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const currentMessages = prevMessages.filter((message) => message.id !== messageId);
      return currentMessages;
    });
  }

  return (
    <div className="timeline">
      {
        (messagesData && messagesData.length > 0)
          ? <Message 
              messagesData={messagesData}
              onClickLike={handleClickLike}
              onClickBookmark={handleClickBookmark}
              onClickDelete={handleClickDelete}
            />
          : <div className="timeline__empty">
              <h3>Zatím se nic neděje</h3>
              <p>... ale můžeš to změnit tím, že něco tweetneš :)</p>
            </div>
      }
    </div>
  )
}