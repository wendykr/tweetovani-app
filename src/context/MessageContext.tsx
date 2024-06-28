import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from 'react';

import Message from "../types/Message";

interface MessageContextData {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const MessageContext = createContext<MessageContextData>({
  messages: [],
  setMessages: () => {},
});

export const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <MessageContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};


export const useMessage = () => useContext(MessageContext);