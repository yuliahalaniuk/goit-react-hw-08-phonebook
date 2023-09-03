import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/authOperations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(newUser);
    dispatch(registerUser(newUser));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input className={css.formInput} type="text" name="name" />
      </label>
      <label className={css.formLabel}>
        Email
        <input className={css.formInput} type="text" name="email" />
      </label>
      <label className={css.formLabel}>
        Password
        <input className={css.formInput} type="text" name="password" />
      </label>
      <button className={css.submitBtn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
