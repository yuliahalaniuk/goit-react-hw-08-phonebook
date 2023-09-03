import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { getIsLoggedIn } from 'redux/selectors';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.headerNavLinkActive : css.headerNavLink
                }
                to="create"
              >
                Add Contact
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
