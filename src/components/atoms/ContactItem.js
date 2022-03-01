import React from 'react';
import SMIcon from './SMIcon';

const ContactItem = ({ item }) => {

    const { url, nickname } = item;

    return(
        <a href={ url } target='_blank' rel='noreferrer'>
            <SMIcon item={item} />
            <span>{ nickname }</span>
        </a>
    );
};

export default ContactItem;