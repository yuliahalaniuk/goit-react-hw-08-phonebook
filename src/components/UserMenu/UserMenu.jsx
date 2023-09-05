import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { getUserEmail } from 'redux/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <div className={css.userMenu}>
      <p className={css.userGreeting}>{userEmail && userEmail}</p>
      <button
        type="button"
        className={css.logoutBtn}
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
