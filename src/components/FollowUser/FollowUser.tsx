import { useState } from 'react';
import { PersonStructure } from '../../model/Person';
import './FollowUser.css';

interface FollowUserProps extends PersonStructure {
  changeFollow: (followerId: number) => void;
}

export const FollowUser = ({
  id,
  name,
  handle,
  avatar,
  follow,
  changeFollow,
}: FollowUserProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li className="follow-user">
      <img
        src={avatar}
        className="follow-user__avatar"
        alt={`${name}'s avatar`}
      />
      <div className="follow-user__info">
        <p className="follow-user__info--name">{name}</p>
        <p className="follow-user__info--handle">{handle}</p>
      </div>
      <button
        className={`follow-user__button last-child ${follow ? 'follow_active' : ''}`}
        onClick={() => changeFollow(id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {follow && isHovered
          ? 'Již nesledovat'
          : follow
            ? 'Sleduji'
            : 'Sledovat'}
      </button>
    </li>
  );
};
