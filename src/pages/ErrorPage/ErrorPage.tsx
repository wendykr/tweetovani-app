import { Link } from 'react-router-dom';
import './ErrorPage.scss';

export const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h3>Hmm... tato stránka neexistuje</h3>
      <p>
        ... přejdi na hlavní stránku nebo využij nabídky vlevé části obrazovky.
      </p>
      <Link className="errorPage__button" to="/">
        Domů
      </Link>
    </div>
  );
};
