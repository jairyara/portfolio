import React from 'react';
import aboutPH from '../../assets/img/about.jpg';
import list from '../../base/js/menu-items';

const About = () => {

    const id  = list[1].id;
    const name = list[1].name;

    return (
        <section className='about' id={ id }>
            <div className='about__content container-element'>
                <h2 className='title-landing'>
                    { name }
                </h2>
                <article className='about__content--description'>
                    <div>
                        <p>
                            Soy programador frontend, entusiasta del desarrollo móvil y 
                            la seguridad informática. Soy voluntario en la 
                            <a href='https://www.funmarfancol.org/'> Fundación Marfan Colombia</a> y 
                            pertenezco al grupo de investigación  <a href='https://twitter.com/s4p13nt14m'> Sapientiam </a>
                            de seguridad informática.
                        </p>
                        <p>
                            Otras actividades que me gustan hacer son: jugar tenis de mesa,
                            leer, actividades que sean en campo abierto o con mucho contacto 
                            la naturaleza y las actividades de impacto social.
                        </p>
                        <p>
                            Previo a trabajar en desarrollo web, trabajaba en el sector de la construcción
                            en el área de interventoría y pude participar en la construcción de edificios
                            como Torre Norte Atrio y Edificio central, proyectos ubicados en Bogotá, Colombia.
                        </p>
                        <p>
                            Actualmente me interesa aprender sobre tecnologías 
                            relacionadas con desarrollo web (JavaScript frontend y backend), desarrollo
                            móvil (Flutter - dart) y seguridad informática.
                        </p>
                    </div>
                    <figure>
                        <img src={ aboutPH } title='Torrentismo' alt='Torrentismo'/>
                    </figure>
                </article>
            </div>
        </section>
    );
};

export default About;