import { useEffect, useRef, useState } from 'react';
import MessageStructure from '../../model/Message';
import { Post } from '../../components/Post/Post';
import { Timeline } from '../../components/Timeline/Timeline';
import { messages } from '../../data/messages';

export const HomePage = () => {
  const [messagesData, setMessagesData] = useState<MessageStructure[]>([]);
  const prevId = useRef<number>(messages.length + 1);

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

  const addNewMessage = (textMessage: string) => {
    if (textMessage.length > 1) {
      const newMessage = {
        id: prevId.current,
        avatar: '../avatars/anonym.jpg',
        name: 'Anonymous',
        handle: '@anonym',
        time: '0d',
        text: textMessage,
        like: 0,
        bookmark: false,
      };
  
      setMessagesData((prevMessages) => [...prevMessages, newMessage]);
      prevId.current += 1;
    } else {
      return;
    }
  }

  return (
    <>
      <Post onNewMessage={(textMessage) => addNewMessage(textMessage)} />

      <Timeline
        messagesData={messagesData}
        onClickLike={handleClickLike}
        onClickBookmark={handleClickBookmark}
        onClickDelete={handleClickDelete}
      />
    </>
  );
}