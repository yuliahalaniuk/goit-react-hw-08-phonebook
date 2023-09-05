import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperations';
import css from '../Form.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input className={css.formInput} type="text" name="name" />
        </label>
        <label className={css.formLabel}>
          Email
          <input className={css.formInput} type="email" name="email" />
        </label>
        <label className={css.formLabel}>
          Password
          <input className={css.formInput} type="password" name="password" />
        </label>
        <button className={css.submitBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
