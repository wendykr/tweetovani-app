import './Button.css'

interface ButtonProps {
  onClickSend: () => void;
}

export const Button = ({ onClickSend }: ButtonProps) => {

  return (
    <button className="button" onClick={onClickSend}>Tweetni to</button>
  )
}