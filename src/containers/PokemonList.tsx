import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './../hooks/useTypedSelector';
import _ from 'lodash';
import { getPokemonList } from '../actions';
import { Link, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const PokemonList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { data, loading, error } = useTypedSelector((state) => state.pokemonList);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchData = () => {
      dispatch(getPokemonList(page));
    };
    fetchData();
  }, [page, dispatch]);

  const ShowData = () => {
    if (data.count) {
      return (
        <div className={'list-wrapper'}>
          {data.results.map((el, index) => {
            return (
              <div key={index} className={'pokemon-item'}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }
    if (loading) {
      return (
        <div className='container'>
          <h2>Loading...</h2>
        </div>
      );
    }

    if (error) {
      return (
        <div className='container'>
          <h2 style={{ color: 'red' }}>{error.toString()} - Unable to get pokemon list...</h2>
        </div>
      );
    }
  };

  return (
    <div>
      <div className={'search-wrapper'}>
        <p>Search: </p>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => history.push(`/pokemon/${search}`)}>Search</button>
      </div>
      {ShowData()}
      {!_.isEmpty(data) && (
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(data.count / 15)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(data) => setPage(data.selected + 1)}
          containerClassName={'pagination'}
          activeClassName={'active'}
          disabledClassName={'disabled'}
        />
      )}
    </div>
  );
};

export default PokemonList;
