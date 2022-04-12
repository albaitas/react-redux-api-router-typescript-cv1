import { combineReducers } from 'redux';
import { pokemonListReducer } from './pokemonListReducer';
import { pokemonMultipleReducer } from './pokemonMultipleReducer';

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemonMultiple: pokemonMultipleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
