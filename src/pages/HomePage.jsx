import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <section className={css.container}>
        <h1 className={css.mainHeader}>Phonebook</h1>
        <p className={css.text}>
          Have you ever lost a contact number or email address? Have you ever
          had to write down a new contact in your address book because the old
          one was outdated? Have you ever found yourself with an incomplete or
          outdated address book?
        </p>

        <p className={css.text}>
          Phonebook makes sure that you never lose a contact number again. It
          keeps your contact book up to date, so you will never have to deal
          with missing contact information again.
        </p>
        <div className={css.homeBtnWrap}>
          {isLoggedIn ? (
            <Link to="/register" className={css.homeBtn}>
              Create contacts
            </Link>
          ) : (
            <>
              <Link to="/register" className={css.homeBtn}>
                Register
              </Link>
              <Link to="/login" className={css.homeBtn}>
                Login
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
