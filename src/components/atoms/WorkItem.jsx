import React from 'react';

const WorkItem = ({ item }) => {

    const { name, company, start, end, description } = item;

    return(
        <article className='card-work'>
            <h2>{ name }</h2>
            <h3>{ company }</h3>
            <p>{`Inicio: ${start} | ${end !== 'Actualmente' ? `Fin: ${end}` : end } `}</p>
            <p>{ description }</p>
        </article>
    );
};

export default WorkItem;