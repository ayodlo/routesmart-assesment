import React from 'react';
import Results from '../../components/Results';
import SearchBar from '../../components/SearchBar';

const Main = () => {
  const URL = 'https://rickandmortyapi.com/api/character/?page=2';
  const initialState = { results: [] };
  const [state, setState] = React.useState(initialState);
  const { results } = state;

  React.useEffect(() => {
    fetch(URL)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setState({ ...state, results: data.results });
        } else {
          throw new Error(`Error from respose. Status code ${res.status}`);
        }
      })
      .catch((e) => {
        throw new Error(`Error: ${e.message}`);
      });
  }, [URL]);

  return (
    <div>
      <SearchBar setState={setState} results={results} state={state} />
      {results ? <Results results={results} /> : 'Loading...'}
    </div>
  );
};

export default Main;
