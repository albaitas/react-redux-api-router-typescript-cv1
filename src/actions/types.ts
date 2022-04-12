export const POKEMON_LIST_STARTED = 'POKEMON_LIST_STARTED';
export const POKEMON_LIST_SUCCESS = 'POKEMON_LIST_SUCCESS';
export const POKEMON_LIST_FAILURE = 'POKEMON_LIST_FAILUREE';
export const POKEMON_MULTIPLE_STARTED = 'POKEMON_MULTIPLE_STARTED';
export const POKEMON_MULTIPLE_SUCCESS = 'POKEMON_MULTIPLE_SUCCESS';
export const POKEMON_MULTIPLE_FAILURE = 'POKEMON_MULTIPLE_FAILURE';

export enum PokemonListActionTypes {
  POKEMON_LIST_STARTED = 'POKEMON_LIST_STARTED',
  POKEMON_LIST_SUCCESS = 'POKEMON_LIST_SUCCESS',
  POKEMON_LIST_FAILURE = 'POKEMON_LIST_FAILURE'
}

export interface IPokemon {
  count: number;
  results: [{ name: string }];
}

export interface PokemonListStarted {
  type: PokemonListActionTypes.POKEMON_LIST_STARTED;
}

export interface PokemonListSuccess {
  type: PokemonListActionTypes.POKEMON_LIST_SUCCESS;
  payload: IPokemon;
}

export interface PokemonListFailure {
  type: PokemonListActionTypes.POKEMON_LIST_FAILURE;
  payload: string;
}

export type PokemonListAction = PokemonListStarted | PokemonListSuccess | PokemonListFailure;

export enum PokemonMultipleActionTypes {
  POKEMON_MULTIPLE_STARTED = 'POKEMON_MULTIPLE_STARTED',
  POKEMON_MULTIPLE_SUCCESS = 'POKEMON_MULTIPLE_SUCCESS',
  POKEMON_MULTIPLE_FAILURE = 'POKEMON_MULTIPLE_FAILURE'
}

export interface IMultiplePokemon {
  abilities: [ability: { name: string }];
  stats: [base_stat: number, stat: { name: string }];
}

export interface PokemonMultipleStarted {
  type: PokemonMultipleActionTypes.POKEMON_MULTIPLE_STARTED;
}

export interface PokemonMultipleSuccess {
  type: PokemonMultipleActionTypes.POKEMON_MULTIPLE_SUCCESS;
  payload: IMultiplePokemon;
  pokemonName: string;
}

export interface PokemonMultipleFailure {
  type: PokemonMultipleActionTypes.POKEMON_MULTIPLE_FAILURE;
  payload: string;
}

export type PokemonMultipleAction = PokemonMultipleStarted | PokemonMultipleSuccess | PokemonMultipleFailure;
