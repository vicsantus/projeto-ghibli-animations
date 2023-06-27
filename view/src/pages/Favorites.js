import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { apiResp: films, setApiResp } = useContext(FilmsContext);
  const handleClick = ({ target: { name } }) => {
    const newFilms = films.map((film) => {
      if (film.id === Number(name)) {
        return { ...film, fav: false };
      }
      return film;
    });
    setApiResp(newFilms);
  };
  return (
    <>
      <Header />
      <main>
        <h1>Favorites</h1>
        <div>
          {films.filter((film) => film.fav === true).map((film) => (
            <section className="container" key={ film.id }>
              <img src={ film.image } alt={ film.title } />
              <div className="overlay">
                <h3>{film.title}</h3>
                <p>{film.description}</p>
                <button
                  onClick={ handleClick }
                  name={ film.id }
                  type="button"
                >
                  {film.fav ? 'Disfavor' : 'Favorite'}
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
