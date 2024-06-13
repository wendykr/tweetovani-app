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
  return (
    <li className="follow-user">
      <img src={avatar} className="follow-user__avatar" />
      <div className="follow-user__info">
        <p className="follow-user__info--name">{name}</p>
        <p className="follow-user__info--handle">{handle}</p>
      </div>
      <button
        className="follow-user__button last-child"
        onClick={() => changeFollow(id)}
      >
        {follow ? 'Nesledovat' : 'Sledovat'}
      </button>
    </li>
  );
};
