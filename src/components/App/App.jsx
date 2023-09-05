import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { getIsRefreshing } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const CreateContactPage = lazy(() => import('pages/CreateContactPage'));
const SharedLayout = lazy(() =>
  import('components/SharedLayout.jsx/SharedLayout')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader type="primary" />}>
        {isRefreshing ? (
          <Loader type="primary" />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      component={RegisterPage}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      component={LoginPage}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute component={ContactsPage} redirectTo="/" />
                  }
                />
                <Route
                  path="/create"
                  element={
                    <PrivateRoute
                      component={CreateContactPage}
                      redirectTo="/"
                    />
                  }
                />
              </Route>
            </Routes>
          </>
        )}
      </Suspense>
    </>
  );
};

export default App;
