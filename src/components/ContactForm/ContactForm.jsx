import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
export const ContactForm = ({
  name,
  number,
  onChangeName,
  onChangeNumber,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.label}>
        <h2 className={css.title}>Name:</h2>
        <input
          type="text"
          name="name"
          value={name}
          className={css.input}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2 className={css.title}>Number:</h2>
        <input
          type="tel"
          name="number"
          value={number}
          className={css.input}
          onChange={onChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addContact}>
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeNumber: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
