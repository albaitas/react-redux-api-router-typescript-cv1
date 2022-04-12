import { IPokemon, PokemonListAction, PokemonListActionTypes } from '../actions/types';

interface PokemonState {
  loading: boolean;
  error: null | string;
  data: IPokemon;
}

const defaultState: PokemonState = {
  loading: false,
  error: '',
  data: {
    count: 0,
    results: [{ name: '' }]
  }
};

export const pokemonListReducer = (state = defaultState, action: PokemonListAction): PokemonState => {
  switch (action.type) {
    case PokemonListActionTypes.POKEMON_LIST_STARTED:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case PokemonListActionTypes.POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case PokemonListActionTypes.POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
