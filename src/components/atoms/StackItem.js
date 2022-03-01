import React from 'react';

const StackItem = ({ item }) => {

    const { icon, name } = item;

    return (
        <div className='card-stack'>
            <img src={ icon } title={ name } alt={ name } />
            <p>{ name }</p>
        </div>
    );
};

export default StackItem;