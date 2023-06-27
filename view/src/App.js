import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FilmsContext from './context/FilmsContext';
import './index.css';

import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  const [apiResp, setApiResp] = useState([]);
  useEffect(() => {
    const resp = async () => {
      try {
        const response = await fetch('http://localhost:3001/');
        const json = await response.json();
        const jsonWithFav = json.map((film) => ({ ...film, fav: false }));
        setApiResp(jsonWithFav);
      } catch (e) {
        return `Ocorreu um erro ${e}`;
      }
    };
    resp();
  }, []);

  return (
    <FilmsContext.Provider value={{ apiResp, setApiResp }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;
