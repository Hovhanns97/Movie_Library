import React from "react";
import { Redirect, Switch, Route } from "react-router-dom"
import Styles from './App.css';
import MovieList from "./components/Movies";
import MovieInfo from "./components/Movies/MovieInformation";

import NavbarComponent from "./components/Navbar";

const App = () => {

  return (
    <div>
      <NavbarComponent />
      <div
        className="mx-auto containerBig movie"
      >
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/movies" />} />
          <Route exact path="/movies" render={() => <MovieList />} />
          <Route path="/movies/:movie_id" render={() => <MovieInfo />}/>
          <Route path="/favorites" render={() => <div>Favorites</div>} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
