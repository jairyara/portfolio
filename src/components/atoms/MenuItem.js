import React from 'react';

const MenuItem = ({item}) => {
    
    const { id, name } = item;
    
    return (
        <li>
            <a href={`#${id}`} title={ name }>{ name }</a>
        </li>
    );
};

export default MenuItem;