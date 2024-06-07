import './Form.css';

interface FormProps {
  valueMessage: string;
  setValueMessage: (value: string) => void;
}

export const Form = ({ valueMessage, setValueMessage }: FormProps) => {

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValueMessage(event.target.value);
  }

  return (
    <form className="post__form">
      <textarea
        name="post-message"
        id="post-message"
        rows={4}
        className="post__message"
        placeholder="Řekni, co se děje?"
        value={valueMessage}
        onChange={handleChangeMessage}
      >
      </textarea>
    </form>
  )
}