import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleFilterContact }) => {
  return (
    <label>
      <h2 className={css.title}>Find contacts by name:</h2>
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={handleFilterContact}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterContact: PropTypes.func.isRequired,
};
