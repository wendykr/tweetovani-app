import './UserCard.css';

export const UserCard = () => {
  return (
    <div className="usercard">
      <img src="./avatars/anonym.jpg" className="usercard__avatar" />
      <div className="usercard__info">
        <p className="usercard__info--name">anonymous</p>
        <p className="usercard__info--handle">@anonym</p>
      </div>
    </div>
  );
};
