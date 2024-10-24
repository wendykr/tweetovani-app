import './Form.scss';

interface FormProps {
  valueMessage: string;
  setValueMessage: (value: string) => void;
  setIsButtonDisabled: (value: boolean) => void;
  setCharactersCount: (value: number) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  onFocus: () => void;
}

export const Form = ({
  valueMessage,
  setValueMessage,
  setIsButtonDisabled,
  setCharactersCount,
  textareaRef,
  onFocus,
}: FormProps) => {
  const handleChangeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const inputValue = event.target.value;
    const hasNonSpaceCharacters = /\S/.test(inputValue);

    if (inputValue.length > 0 && hasNonSpaceCharacters) {
      inputValue.length > 280
        ? setIsButtonDisabled(true)
        : setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    setValueMessage(inputValue);
    setCharactersCount(280 - inputValue.length);
  };

  return (
    <form className="post__form">
      <textarea
        name="post-message"
        id="post-message"
        rows={1}
        className="post__message"
        placeholder="Řekni, co se děje?!"
        value={valueMessage}
        onChange={handleChangeMessage}
        onFocus={onFocus}
        ref={textareaRef}
      ></textarea>
    </form>
  );
};
