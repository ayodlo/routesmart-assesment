const Result = ({ result }) => {
  const { id, gender, name, species, created, type } = result;
  return (
    <tr>
      <td style={{ visibility: 'hidden' }}>{id}</td>
      <td>{gender}</td>
      <td>{name}</td>
      <td>{species}</td>
      <td>{created ?? 'Created Not Provided'}</td>
      <td>{type}</td>
    </tr>
  );
};

export default Result;
