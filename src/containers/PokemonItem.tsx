import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../actions';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from './../hooks/useTypedSelector';

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export type PokemonAbility = {
  ability: {
    name: string;
  };
};

export type PokemonSprites = {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

const Pokemon: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemon }: { pokemon: string } = useParams();

  const { data, loading, error } = useTypedSelector((state) => state.pokemonMultiple);

  useEffect(() => {
    dispatch(getPokemon(pokemon));
  }, [dispatch, pokemon]);

  const ShowData = () => {
    if (data[pokemon]) {
      const pokeData: PokemonType = data[pokemon];
      return (
        <div className={'pokemon-wrapper'}>
          <div className={'item'}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt='' />
            <img src={pokeData.sprites.back_default} alt='' />
            <img src={pokeData.sprites.front_shiny} alt='' />
            <img src={pokeData.sprites.back_shiny} alt='' />
          </div>
          <div className='item'>
            <h1>Stats</h1>
            {pokeData.stats.map((el: PokemonStat, index: number) => {
              return (
                <p key={index}>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className='item'>
            <h1>Abilities</h1>
            {pokeData.abilities.map((el: PokemonAbility, index: number) => {
              return <p key={index}>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }

    if (loading) {
      return <h2>Loading...</h2>;
    }
    if (error) {
      return <h2 style={{ color: 'red' }}>{error.toString()} - Unable to get pokemon...</h2>;
    }
  };

  return (
    <div className={'poke'}>
      <h1>{pokemon}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
