import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SMIcon = ({ item }) => {

    const { icon, url } = item;

    return (
        <a href={ url } target='_blank' rel='noreferrer'>
            <div className='social-icon'>
                <FontAwesomeIcon icon={icon} />
            </div>
        </a>
    );
};

export default SMIcon;