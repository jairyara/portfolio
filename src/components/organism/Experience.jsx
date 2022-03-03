import React, { useState } from 'react';
import list from '../../base/js/menu-items';
import work from '../../base/js/experience';
import WorkList from '../molecules/WorkList';

const Experience = () => {

    const [ works ] = useState( work );

    const id  = list[3].id;
    const name = list[3].name;

    return(
        <section className='experience' id={ id }>
            <div className='experience__content container-element'>
                <h2 className='title-landing'>
                    { name }
                </h2>
                <section className='experience__content--list'>
                    <WorkList work={ works } />
                </section>
            </div>
        </section>
    );
};

export default Experience;