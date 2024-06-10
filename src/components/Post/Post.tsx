import { useState } from 'react';
import { Button } from '../Button/Button'
import { Form } from '../Form/Form'
import './Post.css'

interface PostProps {
  onNewMessage: (textMessage: string) => void;
}

export const Post = ({ onNewMessage }: PostProps) => {
  const [valueMessage, setValueMessage] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleClickSend = () => {
    onNewMessage(valueMessage);
    setValueMessage('');
    setIsButtonDisabled(true);
  }

  return (
    <div className="post">
      <div className="post__user">
        <img className="post__avatar" src="../avatars/anonym.jpg" />
      </div>
      <div className="post__form">
        <Form
          valueMessage={valueMessage}
          setValueMessage={setValueMessage}
          setIsButtonDisabled={setIsButtonDisabled}
        />
        <div className="post__actions">
          <Button
            onClickSend={handleClickSend}
            isButtonDisabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
}