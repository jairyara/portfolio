import React from 'react';
import WorkItem from '../atoms/WorkItem';

const WorkList = ({ work }) => {
    return(
        <div className='work-list'>
            {
                work.map(( item ) => (
                    <WorkItem item={ item } />
                ))
            }
        </div>
    );
};

export default WorkList;