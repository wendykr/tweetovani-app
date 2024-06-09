import './Form.css';

interface FormProps {
  valueMessage: string;
  setValueMessage: (value: string) => void;
  setIsButtonDisabled: (value: boolean) => void;
}

export const Form = ({
  valueMessage,
  setValueMessage,
  setIsButtonDisabled,
}: FormProps) => {
  const handleChangeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const inputValue = event.target.value;
    const hasNonSpaceCharacters = /\S/.test(inputValue);

    if (inputValue.length > 0 && hasNonSpaceCharacters) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    setValueMessage(inputValue);
  };

  return (
    <form className="post__form">
      <textarea
        name="post-message"
        id="post-message"
        rows={4}
        className="post__message"
        placeholder="Řekni, co se děje?!"
        value={valueMessage}
        onChange={handleChangeMessage}
      ></textarea>
    </form>
  );
};