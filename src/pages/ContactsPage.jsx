import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import css from '../components/App/App.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isError = useSelector(getError);

  if (isError) {
    return (
      <p className={css.errorMessageWrap}>
        <span className={css.errorMessageMain}>Opps...</span>
        <span className={css.errorMessage}>
          {isError}. Please reload the page.
        </span>
      </p>
    );
  }

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.contactListTitle}>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
