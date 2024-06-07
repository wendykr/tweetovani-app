import { useEffect, useRef, useState } from 'react';
import MessageStructure from '../../model/message';
import { Post } from '../Post/Post';
import { Timeline } from '../Timeline/Timeline';
import './Main.css';
import { messages } from '../../data/messages';

export const Main = () => {
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
  }

  return (
    <main className="main">
      <h1 className="page-title">Tweetování</h1>

      <Post onNewMessage={(textMessage) => addNewMessage(textMessage)} />

      <Timeline
        messagesData={messagesData}
        onClickLike={handleClickLike}
        onClickBookmark={handleClickBookmark}
        onClickDelete={handleClickDelete}
      />
    </main>
  );
}