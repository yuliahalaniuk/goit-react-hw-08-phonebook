import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import css from './ContactsPage.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'redux/selectors';
import ErrorComponent from 'components/Error/ErrorComponent';
import Container from 'components/Container/Container';

const ContactsPage = () => {
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isError) {
    return <ErrorComponent isError={isError} />;
  }

  return (
    <Container>
      <div className={css.wrapper}>
        <h2 className={css.phonebookTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default ContactsPage;
