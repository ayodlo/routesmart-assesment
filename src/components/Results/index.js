import Result from './Result';

const Results = ({ results }) => {
  return (
    <table>
      <th style={{ visibility: 'hidden' }}>ID</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Type</th>
      <th>Species</th>
      <th>Created</th>
      {results.map((result) => {
        return <Result result={result} />;
      })}
    </table>
  );
};

export default Results;

/*

*/
