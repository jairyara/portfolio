import React from 'react';
import StackItem from '../atoms/StackItem';

const StackList = ({ stack }) => {
    return(
        <div className='stack-list'>
            {
                stack.map(( item ) => (
                    <StackItem item={ item } />
                ))
            }
        </div>
    );
};

export default StackList;