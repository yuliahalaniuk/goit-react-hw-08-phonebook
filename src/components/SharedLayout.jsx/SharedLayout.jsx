import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/authOperations';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <header className={css.header}>
        {isLoggedIn && (
          <>
            <div className={css.headerNavLinkWrap}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.headerNavLinkActive : css.headerNavLink
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? css.headerNavLinkActive : css.headerNavLink
                }
                to="contacts"
              >
                Contacts
              </NavLink>
            </div>
            <button
              type="button"
              className={css.logoutBtn}
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              Log out
            </button>
          </>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
