import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import './Post.css';
import { PersonStructure } from '../../model/Person';
import { declineCharacters } from '../../helpers/declineCharacters';

interface PostProps {
  onNewMessage: (textMessage: string) => void;
  randomPerson: PersonStructure;
}

export const Post = ({ onNewMessage, randomPerson }: PostProps) => {
  const [valueMessage, setValueMessage] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [charactersCount, setCharactersCount] = useState<number>(280);
  const [isTextareaFocused, setIsTextareaFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleClickSend = () => {
    onNewMessage(valueMessage);
    setValueMessage('');
    setIsButtonDisabled(true);
    setCharactersCount(280);
    setIsTextareaFocused(false);
  };

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

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
