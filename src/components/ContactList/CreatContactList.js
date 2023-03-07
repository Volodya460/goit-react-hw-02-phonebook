export default function CreatContactList({ array, deletContacte }) {
  return (
    <ul>
      {array.map(arr => (
        <li key={arr.id}>
          {arr.name}:{arr.number}
          <button type="button" onClick={() => deletContacte(arr.id)}>
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
}
