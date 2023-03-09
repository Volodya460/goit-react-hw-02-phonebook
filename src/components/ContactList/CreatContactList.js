import PropTypes from 'prop-types';
import { LiList, ButtonContacts, UlContacts } from './ContactList.styled';
export default function CreatContactList({ array, deletContacte }) {
  return (
    <UlContacts>
      {array.map(arr => (
        <LiList key={arr.id}>
          {arr.name}:{arr.number}
          <ButtonContacts type="button" onClick={() => deletContacte(arr.id)}>
            Delet
          </ButtonContacts>
        </LiList>
      ))}
    </UlContacts>
  );
}

CreatContactList.prototype = {
  array: PropTypes.array.isRequired,
  deletContacte: PropTypes.func.isRequired,
};
