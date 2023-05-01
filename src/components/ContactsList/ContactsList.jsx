import PropTypes from 'prop-types';
import { Ol } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Ol>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </Ol>
  );
};