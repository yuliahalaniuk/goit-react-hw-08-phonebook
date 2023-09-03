import { useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm.jsx/RegisterForm';
import { getAuthError } from 'redux/selectors';
import ErrorComponent from 'components/Error/ErrorComponent';
import Container from 'components/Container/Container';

const RegisterPage = () => {
  const isError = useSelector(getAuthError);

  if (isError) {
    return <ErrorComponent isError={isError} />;
  }

  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
