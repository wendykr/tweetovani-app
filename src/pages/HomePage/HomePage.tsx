import { Dispatch, SetStateAction, useRef } from 'react';

import { Post } from '../../components/Post/Post';
import { Timeline } from '../../components/Timeline/Timeline';
import { messages } from '../../data/messages';
import MessageStructure from '../../model/Message';

interface HomePageProps {
  messagesData: MessageStructure[];
  setMessagesData: Dispatch<SetStateAction<MessageStructure[]>>;
}

export const HomePage = ({ messagesData, setMessagesData }: HomePageProps) => {
  const prevId = useRef<number>(messages.length + 1);

  const handleClickLike = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const updatedMessages = prevMessages.map(message => {
        if (message.id === messageId) {
          return { ...message, like: message.like + 1 };
        }
        return message;
      });
      localStorage.setItem('messagesData', JSON.stringify(updatedMessages));
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
      localStorage.setItem('messagesData', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  }

  const handleClickDelete = (messageId: number) => {
    setMessagesData((prevMessages) => {
      const currentMessages = prevMessages.filter((message) => message.id !== messageId);
      localStorage.setItem('messagesData', JSON.stringify(currentMessages));
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
  
      const updatedMessages = [...messagesData, newMessage];
      setMessagesData(updatedMessages);
      localStorage.setItem('messagesData', JSON.stringify(updatedMessages));
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