import { Dispatch, SetStateAction, useRef } from 'react';
import dayjs from 'dayjs';

import { Post } from '../../components/Post/Post';
import { Timeline } from '../../components/Timeline/Timeline';
import { messages } from '../../data/messages';
import MessageStructure from '../../model/Message';

interface HomePageProps {
  messagesData: MessageStructure[];
  setMessagesData: Dispatch<SetStateAction<MessageStructure[]>>;
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const HomePage = ({
  messagesData,
  setMessagesData,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: HomePageProps) => {
  const prevId = useRef<number>(messages.length + 1);

  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');

  const addNewMessage = (textMessage: string) => {
    if (textMessage.length > 1) {
      const newMessage = {
        id: prevId.current,
        avatar: '../avatars/anonym.jpg',
        name: 'Anonymous',
        handle: '@anonym',
        time: now,
        text: textMessage,
        like: 0,
        bookmark: false,
      };

      const updatedMessages = [...messagesData, newMessage];
      setMessagesData(updatedMessages);
      sessionStorage.setItem('messagesData', JSON.stringify(updatedMessages));
      prevId.current += 1;
    } else {
      return;
    }
  };

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
};