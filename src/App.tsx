import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import PokemonItem from './containers/PokemonItem';

const App: React.FC = () => {
  return (
    <div className='App'>
      <nav>
        <NavLink to='/'>Search</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={PokemonList} />
        <Route exact path='/pokemon/:pokemon' component={PokemonItem} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
