import React, { useState } from 'react';
import StackList from '../molecules/StackList';
import technologies from '../../base/js/technologies';

const Stack = () => {

    const [ stack ] = useState( technologies );

    return (
        <section className='stack'>
            <div className='stack__content container-element'>
                <h2 className='stack__content--title'>
                    Trabajo con las siguientes tecnologías
                </h2>
                <section className='stack__content--list'>
                    <StackList stack={ stack } />
                </section>
            </div>
        </section>
    );
};

export default Stack;