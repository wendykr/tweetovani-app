import './BookmarkPage.css';
import { FaRegBookmark } from 'react-icons/fa';

export const BookmarkPage = () => {

  return (
    <div className="bookmarkPage">
      <h3>Zatím tu nic nemáš</h3>
      <p>
        ... ale můžeš to změnit tím, že klikneš u příspěvků na ikonu{' '}
        <FaRegBookmark className="icon-bookmark" />
      </p>
    </div>
  )
}