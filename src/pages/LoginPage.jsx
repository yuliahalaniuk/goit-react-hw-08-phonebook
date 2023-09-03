import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import css from './HomePage.module.css';
import { getAuthError } from 'redux/selectors';
const LoginPage = () => {
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
      <LoginForm />
    </div>
  );
};

export default LoginPage;
