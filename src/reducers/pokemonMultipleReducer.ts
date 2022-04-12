import { PokemonMultipleAction, PokemonMultipleActionTypes } from '../actions/types';

interface PokemonMultipleState {
  loading: boolean;
  data: any;
  error: null | string;
  pokemonName: string;
}

const defaultState: PokemonMultipleState = {
  loading: false,
  data: {},
  error: '',
  pokemonName: ''
};

export const pokemonMultipleReducer = (state = defaultState, action: PokemonMultipleAction): PokemonMultipleState => {
  switch (action.type) {
    case PokemonMultipleActionTypes.POKEMON_MULTIPLE_STARTED:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case PokemonMultipleActionTypes.POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload
        },
        error: ''
      };
    case PokemonMultipleActionTypes.POKEMON_MULTIPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
