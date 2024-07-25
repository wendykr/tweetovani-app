import './UserCard.css';
import { useUser } from '../../context/UserContext';

export const UserCard = () => {
  const { randomPerson } = useUser();

  return (
    <div className="usercard">
      <img
        src={randomPerson.avatar}
        className="usercard__avatar"
        alt={`Profilová fotka uživatele ${randomPerson.name}`}
        width="50"
        height="50"
      />
      <div className="usercard__info">
        <p className="usercard__info--name">{randomPerson.name}</p>
        <p className="usercard__info--handle">{randomPerson.handle}</p>
      </div>
    </div>
  );
};
