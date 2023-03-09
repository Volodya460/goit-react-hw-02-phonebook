import PropTypes from 'prop-types';
import { InputFilter } from './Filter.styled';
export default function Filter({ changeFilter, value }) {
  return (
    <InputFilter
      type="text"
      onChange={changeFilter}
      value={value}
    ></InputFilter>
  );
}

Filter.prototype = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
