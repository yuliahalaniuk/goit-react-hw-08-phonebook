import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getLoading } from '../../redux/selectors';
import css from './ContactList.module.css';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filterText = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  const getVisibleContacts = () => {
    const normalizedFilter = filterText.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader type="secondary" />
      ) : contacts.length === 0 ? (
        <p className={css.contactListText}> No contacts yet </p>
      ) : (
        <ul className={css.contactList}>
          {getVisibleContacts().map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
