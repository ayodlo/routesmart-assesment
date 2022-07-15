import React from 'react';

const SearchBar = ({ setState, results, state }) => {
  const [input, setInput] = React.useState('');
  
  const handleChange = (input) => {
    const filteredResults = results.filter((result) => {
      const { id, gender, name, species, created, type } = result;
      return (
        id === input ||
        gender === input ||
        name === input ||
        species === input ||
        created === input ||
        type === input
      );
    });
    setState({ ...state, results: filteredResults });
  };

  React.useEffect(() => {
    handleChange(input);
  }, [input]);

  return (
    <input value={input} onChange={(e) => setInput(e.target.value)}></input>
  );
};

export default SearchBar;
