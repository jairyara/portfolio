import React, { useState } from 'react';
import list from '../../base/js/menu-items';
import project from '../../base/js/projects';
import ProjectList from '../molecules/ProjectList';


const Portfolio = () => {

    const [ projects ] = useState( project );

    const id  = list[2].id;
    const name = list[2].name;

    return (
        <section className='portfolio' id={ id }>
            <div className='portfolio__content container-element'>
                <h2 className='title-landing'>
                    { name }
                </h2>
                <section className='portfolio__content--projects'>
                    <ProjectList project={ projects } />
                </section>
            </div>
        </section>
    );
};

export default Portfolio;