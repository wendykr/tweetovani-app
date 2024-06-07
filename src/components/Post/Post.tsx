import { useState } from 'react';
import { Button } from '../Button/Button'
import { Form } from '../Form/Form'
import './Post.css'

interface PostProps {
  onNewMessage: (textMessage: string) => void;
}

export const Post = ({ onNewMessage }: PostProps) => {
  const [valueMessage, setValueMessage] = useState<string>('');

  const handleClickSend = () => {
    onNewMessage(valueMessage);
    setValueMessage('');
  }

  return (
    <div className="post">
      <Form
        valueMessage={valueMessage}
        setValueMessage={setValueMessage}
      />
      <div className="post__actions">
        <Button onClickSend={handleClickSend} />
      </div>
    </div>
  )
}