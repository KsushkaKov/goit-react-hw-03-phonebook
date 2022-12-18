import css from './ContactFilter.module.css';
import PropTypes from 'prop-types';

export const ContactFilter = ({ filter, handleChange }) => (
  <div>
    <label className={css.filterLabel}>Find contacts by name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
