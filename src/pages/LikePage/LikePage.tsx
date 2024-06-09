import './LikePage.css';
import { FaRegHeart } from 'react-icons/fa';

export const LikePage = () => {

  return (
    <div className="likePage">
      <h3>Zatím tu nic nemáš</h3>
      <p>
        ... ale můžeš to změnit tím, že klikneš u příspěvků na ikonu{' '}
        <FaRegHeart className="icon-heart" />
      </p>
    </div>
  )
}