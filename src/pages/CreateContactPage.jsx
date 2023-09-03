import ContactForm from '../components/ContactForm/ContactForm';
import css from './ContactsPage.module.css';
import { getError } from 'redux/selectors';
import ErrorComponent from 'components/Error/ErrorComponent';
import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';

const CreateContactPage = () => {
  const isError = useSelector(getError);

  if (isError) {
    return <ErrorComponent isError={isError} />;
  }

  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.phonebookTitle}>Create New Contact</h1>
        <ContactForm />
      </div>
    </Container>
  );
};

export default CreateContactPage;
