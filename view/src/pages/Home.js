import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Home() {
  const { apiResp: films, setApiResp } = useContext(FilmsContext);
  const handleClick = ({ target: { name } }) => {
    const newFilms = films.map((film) => {
      if (film.id === Number(name)) {
        return { ...film, fav: !film.fav };
      }
      return film;
    });
    setApiResp(newFilms);
  };
  return (
    <>
      <Header />
      <main>
        <h1>Films</h1>
        <div>
          {films.map((film) => (
            <section className="container" key={ film.id }>
              <img src={ film.image } alt={ film.title } />
              <div className="overlay">
                <h3>{film.title}</h3>
                <p>{film.description}</p>
                <button
                  data-testid={ `button ${film.id}` }
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
