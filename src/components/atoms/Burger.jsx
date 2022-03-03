import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Burger = () => {
    return (
        <button className='btn-menu'>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
};

export default Burger;