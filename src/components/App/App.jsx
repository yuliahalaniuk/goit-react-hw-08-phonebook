import React from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ContactsPage from '../../pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import SharedLayout from '../SharedLayout.jsx/SharedLayout';
import { useEffect } from 'react';
import { refreshUser } from 'redux/authOperations';

import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    console.log('app mount');
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <span className={css.loader}></span>
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
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
