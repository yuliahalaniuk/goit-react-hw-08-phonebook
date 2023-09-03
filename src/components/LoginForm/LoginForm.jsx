import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authOperations';
import css from './LoginForm.module.css';
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    const curUser = {
      email: email.value,
      password: password.value,
    };

    console.log(curUser);
    dispatch(loginUser(curUser));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Email
        <input className={css.formInput} type="text" name="email" />
      </label>
      <label className={css.formLabel}>
        Password
        <input className={css.formInput} type="text" name="password" />
      </label>
      <button className={css.submitBtn} type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
