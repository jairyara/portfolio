import React from 'react';
import ProjectCard from '../atoms/ProjectCard';

const ProjectList = ({ project }) => {
    return (
        <div className='project-list'>
            {
                project.map(( item ) => (
                    <ProjectCard item={ item }/>
                ))
            }
        </div>
    );
};

export default ProjectList;