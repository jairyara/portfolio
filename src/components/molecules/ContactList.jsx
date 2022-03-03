import React from 'react';
import ContactItem from '../atoms/ContactItem';

const ContactList = ({ social }) => {
    return (
        <div className='contact-list'>
            {
                social.map(( item ) => (
                    <ContactItem item={ item }/>
                ))
            }
        </div>
    );
};

export default ContactList;