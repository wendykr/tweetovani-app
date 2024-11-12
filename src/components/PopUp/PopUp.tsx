import { useRef } from 'react';
import { useMessage } from '../../context/MessageContext';
import { useUser } from '../../context/UserContext';
import { Post } from '../Post/Post';
import dayjs from 'dayjs';
import { messages as initialMessages } from '../../data/messages';
import './PopUp.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { usePopUp } from '../../context/PopUpContext';

export const PopUp = () => {
  const { messages, onSetMessages } = useMessage();
  const { randomPerson } = useUser();
  const { onClickClosePopUp } = usePopUp();
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
        avatarAvif: randomPerson.avatarAvif,
        avatarWebp: randomPerson.avatarWebp,
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
    <div className="popup">
      <div className="popup__icon" onClick={onClickClosePopUp}>
        <FaArrowLeft />
      </div>
      <Post onNewMessage={(textMessage) => addNewMessage(textMessage)} />
    </div>
  );
};
