import { Link } from 'react-router-dom';
import { ReactComponent as Ghibli } from '../imgs/Ghibli.svg';
import { ReactComponent as Vector } from '../imgs/Vector.svg';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <Ghibli />
        </Link>
        <Link data-testid="fav-testid" to="/favorites">
          <Vector />
          Favorites
        </Link>
      </nav>
    </header>
  );
}
