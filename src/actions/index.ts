import {
  IPokemon,
  PokemonListAction,
  PokemonListActionTypes,
  PokemonListStarted,
  PokemonListSuccess,
  PokemonListFailure,
  IMultiplePokemon,
  PokemonMultipleAction,
  PokemonMultipleActionTypes,
  PokemonMultipleStarted,
  PokemonMultipleSuccess,
  PokemonMultipleFailure
} from './types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const pokemonListStarted = (): PokemonListStarted => {
  return {
    type: PokemonListActionTypes.POKEMON_LIST_STARTED
  };
};

export const pokemonListSuccess = (data: IPokemon): PokemonListSuccess => {
  return {
    type: PokemonListActionTypes.POKEMON_LIST_SUCCESS,
    payload: data
  };
};

export const pokemonListFailure = (error: any): PokemonListFailure => ({
  type: PokemonListActionTypes.POKEMON_LIST_FAILURE,
  payload: error
});

export const getPokemonList = (page: number) => async (dispatch: Dispatch<PokemonListAction>) => {
  const perPage = 15;
  const offset = page * perPage - perPage;
  dispatch(pokemonListStarted());
  try {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`).then((res) => {
      dispatch(pokemonListSuccess(res.data));
    });
  } catch (err) {
    dispatch(pokemonListFailure(err));
    console.log(err);
  }
};

export const pokemonMultipleStarted = (): PokemonMultipleStarted => {
  return {
    type: PokemonMultipleActionTypes.POKEMON_MULTIPLE_STARTED
  };
};

export const pokemonMultipleSuccess = (data: IMultiplePokemon, pokemonName: string): PokemonMultipleSuccess => {
  return {
    type: PokemonMultipleActionTypes.POKEMON_MULTIPLE_SUCCESS,
    payload: data,
    pokemonName: pokemonName
  };
};

export const pokemonMultipleFailure = (error: any): PokemonMultipleFailure => ({
  type: PokemonMultipleActionTypes.POKEMON_MULTIPLE_FAILURE,
  payload: error
});

export const getPokemon = (pokemonName: string) => async (dispatch: Dispatch<PokemonMultipleAction>) => {
  dispatch(pokemonMultipleStarted());
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    dispatch(pokemonMultipleSuccess(res.data, pokemonName));
  } catch (err) {
    dispatch(pokemonMultipleFailure(err));
    console.log(err);
  }
};
