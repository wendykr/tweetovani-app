import { useState } from 'react';
import { Button } from '../Button/Button'
import { Form } from '../Form/Form'
import './Post.css'
import { PersonStructure } from '../../model/Person';

interface PostProps {
  onNewMessage: (textMessage: string) => void;
  randomPerson: PersonStructure;
}

export const Post = ({ onNewMessage, randomPerson }: PostProps) => {
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
        <img className="post__avatar" src={randomPerson.avatar} />
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