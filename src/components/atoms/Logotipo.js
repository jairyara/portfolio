import React from 'react';
import logo from '../../assets/logos/logo.svg';
import list from '../../base/js/menu-items';


const Logotipo = () => {

    const id  = list[0].id;
    const name = list[0].name;

    return (
        <a className='header__content--logotipo' href={`#${ id }`} title={name} >
            <img loading='lazy' src={logo} alt="Jair Yara Logo"/>
        </a>
    );
};

export default Logotipo;