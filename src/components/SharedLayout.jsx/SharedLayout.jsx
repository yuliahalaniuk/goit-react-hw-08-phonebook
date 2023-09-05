import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
const SharedLayout = () => {
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
            <UserMenu />
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
