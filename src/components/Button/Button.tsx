import './Button.css';

interface ButtonProps {
  onClickSend: () => void;
  isButtonDisabled: boolean;
}

export const Button = ({ onClickSend, isButtonDisabled }: ButtonProps) => {
  return (
    <button
      className="button"
      onClick={onClickSend}
      disabled={isButtonDisabled}
    >
      Tweetni to
    </button>
  );
};
