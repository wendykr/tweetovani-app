import { useRef } from 'react';
import dayjs from 'dayjs';
import { Post } from '../../components/Post/Post';
import { Timeline } from '../../components/Timeline/Timeline';
import { messages } from '../../data/messages';
import Message from '../../types/Message';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

interface HomePageProps {
  messagesData: Message[];
  onSetMessagesData: (message: Message[]) => void;
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const HomePage = ({
  messagesData,
  onSetMessagesData,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: HomePageProps) => {
  const { randomPerson } = useContext(UserContext);
  const prevId = useRef<number>(
    sessionStorage.getItem('messagesData')
      ? JSON.parse(sessionStorage.getItem('messagesData')!).length + 1
      : messages.length + 1
  );
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
        likedAt: '0000-00-00 00:00:00',
        bookmark: false,
        bookmarkedAt: '0000-00-00 00:00:00',
      };

      const updatedMessages = [...messagesData, newMessage];
      onSetMessagesData(updatedMessages);
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
