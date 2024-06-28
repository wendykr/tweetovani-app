import { useRef } from 'react';
import dayjs from 'dayjs';
import { Post } from '../../components/Post/Post';
import { Timeline } from '../../components/Timeline/Timeline';
import { messages as initialMessages } from '../../data/messages';
import Message from '../../types/Message';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { MessageContext } from '../../context/MessageContext';

interface HomePageProps {
  onSetMessages: (message: Message[]) => void;
  handleClickLike: (messageId: number) => void;
  handleClickBookmark: (messageId: number) => void;
  handleClickDelete: (messageId: number) => void;
}

export const HomePage = ({
  onSetMessages,
  handleClickLike,
  handleClickBookmark,
  handleClickDelete,
}: HomePageProps) => {
    const { messages } = useContext(MessageContext);
  const { randomPerson } = useContext(UserContext);
  const prevId = useRef<number>(
    sessionStorage.getItem('messages')
      ? JSON.parse(sessionStorage.getItem('messages')!).length + 1
      : initialMessages.length + 1
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

      const updatedMessages = [...messages, newMessage];
      onSetMessages(updatedMessages);
      sessionStorage.setItem('messages', JSON.stringify(updatedMessages));
      prevId.current += 1;
    } else {
      return;
    }
  };

  return (
    <>
      <Post onNewMessage={(textMessage) => addNewMessage(textMessage)} />

      <Timeline
        onClickLike={handleClickLike}
        onClickBookmark={handleClickBookmark}
        onClickDelete={handleClickDelete}
      />
    </>
  );
};
