import React, { useState } from 'react';
import list  from '../../base/js/menu-items';
import Burger from '../atoms/Burger';
import Logotipo from '../atoms/Logotipo';
import MenuList from '../molecules/MenuList';

const Header = () => {

    const [lists] = useState(list);

    const [open, setOpen] = useState(false);

    return (
        <header className='header'>
            <div className='container-element header__content'>
                <Logotipo />
                <div className='header__content--burger'
                    onClick={() => {
                        setOpen(!open);
                }}>
                    <Burger />
                </div>
                <div className={`${(open ? 'menu-active' : '')} header__content--nav`} >
                    <MenuList menu={lists} />
                </div>
            </div>
        </header>
    )
}

export default Header;