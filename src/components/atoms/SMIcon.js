import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SMIcon = ({ item }) => {

    const { icon, url, name } = item;

    const handlePageChange = () => {
        window.open( url );
    }

    return (
        <button type='button' onClick={ handlePageChange } aria-label={ name } title={ name } className='social-icon'>
            <span aria-hidden='false'><FontAwesomeIcon icon={icon} /></span>
        </button>
    );
};

export default SMIcon;