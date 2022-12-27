import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ data, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {data.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          {contact.name} : {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
