import { useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm.jsx/RegisterForm';
import css from './HomePage.module.css';
import { getAuthError } from 'redux/selectors';

const RegisterPage = () => {
  const isError = useSelector(getAuthError);

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
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
