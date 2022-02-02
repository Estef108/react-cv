import React from 'react';
import './Experience.scss';

const Experience = ({ experience }) => {
    return (
        <div className='experience'>
            <div className='card'>
                <h2>Experiencia</h2>
                {experience.map(element => {
                    return (
                        <div>
                            <p className='name'>&#9989; {element.name}</p>
                            <p>{element.date}</p>
                            <p>{element.where}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience
