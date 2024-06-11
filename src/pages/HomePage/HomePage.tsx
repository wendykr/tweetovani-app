import { Dispatch, SetStateAction, useRef } from 'react';
import dayjs from 'dayjs';

import { Post } from '../../components/Post/Post';
import { Timeline } from '../../components/Timeline/Timeline';
import { messages } from '../../data/messages';
import MessageStructure from '../../model/Message';
import { PersonStructure } from '../../model/Person';

interface HomePageProps {
  messagesData: MessageStructure[];
  setMessagesData: Dispatch<SetStateAction<MessageStructure[]>>;
  randomPerson: PersonStructure;
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const HomePage = ({
  messagesData,
  setMessagesData,
  randomPerson,
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
        avatar: randomPerson.avatar,
        name: randomPerson.name,
        handle: randomPerson.handle,
        time: now,
        text: textMessage,
        like: false,
        likeCount: 0,
        timeLike: '0000-00-00 00:00:00',
        bookmark: false,
        timeBookmark: '0000-00-00 00:00:00',
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
      <Post
        onNewMessage={(textMessage) => addNewMessage(textMessage)}
        randomPerson={randomPerson}
      />

      <Timeline
        messagesData={messagesData}
        randomPerson={randomPerson}
        onClickLike={handleClickLike}
        onClickBookmark={handleClickBookmark}
        onClickDelete={handleClickDelete}
      />
    </>
  );
};