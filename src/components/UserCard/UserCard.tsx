import './UserCard.css';
import { useUser } from '../../context/UserContext';

export const UserCard = () => {
  const { randomPerson } = useUser();

  return (
    <div className="usercard">
      <picture>
        <source srcSet={randomPerson.avatarAvif} type="image/avif" />
        <source srcSet={randomPerson.avatarWebp} type="image/webp" />
        <img
          src={randomPerson.avatar}
          className="usercard__avatar"
          alt={`Profilová fotka uživatele ${randomPerson.name}`}
          width="50"
          height="50"
        />
      </picture>
      <div className="usercard__info">
        <p className="usercard__info--name">{randomPerson.name}</p>
        <p className="usercard__info--handle">{randomPerson.handle}</p>
      </div>
    </div>
  );
};
