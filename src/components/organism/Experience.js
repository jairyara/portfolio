import React from 'react';
import list from '../../base/js/menu-items';

const Experience = () => {
    const id  = list[3].id;
    const name = list[3].name;

    return(
        <section className='experience' id={ id }>
            <div className='experience__content container-element'>
                <h2 className='title-landing'>
                    { name }
                </h2>
                <section className='experience__content--list'>
                    Colocar info
                </section>
            </div>
        </section>
    );
};

export default Experience;