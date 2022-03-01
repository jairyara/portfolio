import React, { useState } from 'react';
import social from '../../base/js/social-items';
import SMList from '../molecules/SMList';
import photo from '../../assets/img/me.jpg';

const Hero = () => {

    const name = ' Jair Yara'

    const [ socials ] = useState(social);

    return (
       <section className='hero' id='home'>
           <div className='hero__content container-element'>
                <h1 className='hero__content--title'>
                    Hola, mi nombre es { name } y soy desarrollador Web,
                    enfocado en el desarrollo frontend
                </h1>
                <div className='hero__content--social'>
                    <SMList social={socials} />
                </div>
                <figure className='hero__content--photo'>
                    <img loading='lazy' src={ photo } alt={ `Foto de ${ name }`} title={ `Foto de ${ name }`} />
                </figure>
           </div>
       </section>
    );
};

export default Hero;