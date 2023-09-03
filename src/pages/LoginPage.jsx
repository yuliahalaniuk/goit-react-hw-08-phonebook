import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import { getAuthError } from 'redux/selectors';
import ErrorComponent from 'components/Error/ErrorComponent';
import Container from 'components/Container/Container';

const LoginPage = () => {
  const isError = useSelector(getAuthError);

  if (isError) {
    return <ErrorComponent isError={isError} />;
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
