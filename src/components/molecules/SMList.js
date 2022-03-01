import React from 'react';
import SMIcon from '../atoms/SMIcon';

const SMList = ({ social }) => {
    return (
        <div className='social-list'>
            {
                social.map(( item ) => (
                    <SMIcon item={item} />
                ))
            }
        </div>
    )
}

export default SMList;