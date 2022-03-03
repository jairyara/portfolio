import React, { useState } from 'react';
import list from '../../base/js/menu-items';
import social from '../../base/js/social-items';
import ContactList from '../molecules/ContactList';


const Contact = () => {

    const [ socials ] = useState(social);

    const id  = list[4].id;
    const name = list[4].name;

    return(
        <section className='contact' id={ id }>
            <div className='contact__content container-element'>
                <h2 className='title-landing'>
                    { name }
                </h2>
                <section className='contact__content--list'>
                    <ContactList social={ socials } />
                </section>
            </div>
        </section>
    );
};

export default Contact;