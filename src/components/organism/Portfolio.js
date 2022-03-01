import React from 'react';
import list from '../../base/js/menu-items';

const Portfolio = () => {

    const id  = list[2].id;
    const name = list[2].name;

    return (
        <section className='portfolio' id={ id }>
            <div className='portfolio__content container-element'>
                <h2 className='title-landing'>
                    { name }
                </h2>
                <section className='portfolio__content--projects'>
                    <article className='portfolio-card'>
                        <img src='' alt='' title=''></img>
                        <div>
                            <h3>
                                Proyecto
                            </h3>
                            <h4>
                                Cliente
                            </h4>
                            <p>
                                Tipo de proyecto
                            </p>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    );
};

export default Portfolio;