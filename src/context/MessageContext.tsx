import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from 'react';

import Message from "../types/Message";
import { useToast } from '../hooks/useToast';
import dayjs from 'dayjs';
import { UserContext } from './UserContext';

interface MessageContextData {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
  handleClickLike: (messageId: number) => void;
}

export const MessageContext = createContext<MessageContextData>({
  messages: [],
  setMessages: () => {},
  handleClickBookmark: () => {},
  handleClickDelete: () => {},
  handleClickLike: () => {},
});

export const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Message[]>([]);
    const { randomPerson } = useContext(UserContext);
    const { showToast } = useToast();
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');

    const handleClickLike = (messageId: number) => {
      setMessages((prevMessages) => {
        const updatedMessages = prevMessages.map((message) => {
          if (message.id === messageId) {
            if (message.like) {
              return {
                ...message,
                likeCount: message.likeCount - 1,
                like: false,
                likedAt: now,
              };
            } else {
              return {
                ...message,
                likeCount: message.likeCount + 1,
                like: true,
                likedAt: now,
              };
            }
          }
          return message;
        });
        sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    };

    const handleClickBookmark = (messageId: number) => {
      setMessages((prevMessages) => {
        const updatedMessages = prevMessages.map((message) => {
          if (message.id === messageId) {
            const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
            return {
              ...message,
              bookmark: !message.bookmark,
              bookmarkedAt: message.bookmark ? '0000-00-00 00:00:00' : now,
            };
          }
          return message;
        });
        sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      const message = messages.find((msg) => msg.id === messageId);
      if (message) {
        message.bookmark
          ? showToast('Odebráno ze Záložky.')
          : showToast('Přidáno do Záložky.');
      }
    };

    const handleClickDelete = (messageId: number) => {
      console.log('click');
      console.log(randomPerson.name);
      setMessages((prevMessages) => {
        const currentMessages = prevMessages.filter(
          (message) =>
            !(message.id === messageId && message.name === randomPerson.name)
        );
        sessionStorage.setItem('messages', JSON.stringify(currentMessages));
        return currentMessages;
      });
    };

  return (
    <MessageContext.Provider
      value={{
        messages,
        setMessages,
        handleClickDelete,
        handleClickBookmark,
        handleClickLike,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};


export const useMessage = () => useContext(MessageContext);