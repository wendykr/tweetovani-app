import { useState, useEffect } from 'react';
import { persons } from '../../data/persons';
import { FollowUser } from '../FollowUser/FollowUser';
import './Follow.css';
import { PersonStructure } from '../../model/Person';
import { getRandomPerson } from '../../helpers/getRandomPerson';

export const Follow = () => {
  const [randomFollowers, setRandomFollowers] = useState<PersonStructure[]>([]);
  const [storedRandomPerson, setStoredRandomPerson] =
    useState<PersonStructure>();

  useEffect(() => {
    const storedRandomPerson = sessionStorage.getItem('randomPerson');
    if (storedRandomPerson) {
      setStoredRandomPerson(JSON.parse(storedRandomPerson));
    } else {
      const randomPerson = getRandomPerson(persons);
      sessionStorage.setItem('randomPerson', JSON.stringify(randomPerson));
      setStoredRandomPerson(randomPerson);
    }
  }, []);

  useEffect(() => {
    if (storedRandomPerson) {
      const storedRandomFollowers = sessionStorage.getItem('randomFollowers');

      if (storedRandomFollowers) {
        setRandomFollowers(JSON.parse(storedRandomFollowers));
      } else {
        const followers: PersonStructure[] = [];

        while (followers.length < 3) {
          let currentFollower = getRandomPerson(persons);

          while (
            storedRandomPerson &&
            storedRandomPerson.id === currentFollower.id
          ) {
            currentFollower = getRandomPerson(persons);
          }

          if (
            !followers.find((follower) => follower.id === currentFollower.id)
          ) {
            followers.push(currentFollower);
          }
        }

        setRandomFollowers(followers);
        sessionStorage.setItem('randomFollowers', JSON.stringify(followers));
      }
    }
  }, [storedRandomPerson]);

  const changeFollow = (followerId: number) => {
    setRandomFollowers((prevRandomFollowers) => {
      const updatedRandomFollowers = prevRandomFollowers.map((follower) => {
        if (follower.id === followerId) {
          return { ...follower, follow: !follower.follow };
        }
        return follower;
      });
      sessionStorage.setItem(
        'randomFollowers',
        JSON.stringify(updatedRandomFollowers)
      );
      return updatedRandomFollowers;
    });
  };

  return (
    <div className="follow">
      <h1 className="follow__title">Koho sledovat</h1>
      <ul className="follow__list">
        {randomFollowers.map((follower) => (
          <FollowUser
            key={follower.id}
            id={follower.id}
            avatar={follower.avatar}
            name={follower.name}
            handle={follower.handle}
            follow={follower.follow}
            changeFollow={changeFollow}
          />
        ))}
      </ul>
    </div>
  );
};
