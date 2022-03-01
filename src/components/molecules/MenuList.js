import React from 'react';
import MenuItem from '../atoms/MenuItem';

const MenuList = ({menu}) => {
    return (
        <ul>
            {menu.map(( item ) => (
                <MenuItem item={item} />
            ))}
        </ul>
    );
};

export default MenuList;
