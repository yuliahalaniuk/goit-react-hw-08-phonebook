import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authOperations';
import css from '../Form.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(
      loginUser({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Email
          <input
            className={css.formInput}
            type="email"
            name="email"
            placeholder="your_email@mail.com"
          />
        </label>
        <label className={css.formLabel}>
          Password
          <input className={css.formInput} type="password" name="password" />
        </label>
        <button className={css.submitBtn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
