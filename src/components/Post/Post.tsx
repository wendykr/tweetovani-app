import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import './Post.scss';
import { declineCharacters } from '../../helpers/declineCharacters';
import { useUser } from '../../context/UserContext';
import { usePopUp } from '../../context/PopUpContext';

interface PostProps {
  onNewMessage: (textMessage: string) => void;
}

export const Post = ({ onNewMessage }: PostProps) => {
  const { onClickClosePopUp } = usePopUp();
  const [valueMessage, setValueMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [charactersCount, setCharactersCount] = useState(280);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { randomPerson } = useUser();

  const handleClickSend = () => {
    onNewMessage(valueMessage);
    setValueMessage('');
    setIsButtonDisabled(true);
    setCharactersCount(280);
    setIsTextareaFocused(false);
    onClickClosePopUp();
  };

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  return (
    <div className="post">
      <div className="post__user">
        <img
          className="post__avatar"
          src={randomPerson.avatar}
          alt={`Profilová fotka uživatele ${randomPerson.name}`}
          width="60"
          height="60"
        />
      </div>
      <div className="post__form">
        <Form
          valueMessage={valueMessage}
          setValueMessage={setValueMessage}
          setIsButtonDisabled={setIsButtonDisabled}
          setCharactersCount={setCharactersCount}
          onFocus={handleTextareaFocus}
          textareaRef={textareaRef}
        />
        <div className="post__actions">
          {isTextareaFocused && (
            <span className="post__charts">
              Zbývá napsat {charactersCount}{' '}
              {declineCharacters(charactersCount)}
            </span>
          )}
          <Button
            onClickSend={handleClickSend}
            isButtonDisabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};
