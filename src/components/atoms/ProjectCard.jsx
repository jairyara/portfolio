import React from 'react';

const ProjectCard = ({ item }) => {
    const { name, url, client, type, img } = item;

    const handlePageChange = () => {
        window.open( url );
    }

    return (
        <button type='button' onClick={ handlePageChange } aria-label={ name } title={ name } className='card-project'>
            <article aria-hidden='false'>
                <img src={ img } alt={ name } title={ name }/>
                <div>
                    <h3>{ name }</h3>
                    <h4>{`Cliente: ${ client }`}</h4>
                    <h4>{ type }</h4>
                </div>
            </article>
        </button>
    );
};

export default ProjectCard;