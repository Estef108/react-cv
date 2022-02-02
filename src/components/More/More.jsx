import React from 'react';
import './More.scss';

const More = ({ languages, skills, volunteer }) => {
    return (
        <div className='more'>
            <div className='languages card'>
                <h2>Idiomas</h2>
                {languages.map(element => {
                    return (
                        <div key={JSON.stringify(element)}>
                            <p>{element.language}</p>
                            <p>Nivel escrito: {element.wrlevel}</p>
                            <p>Nivel oral: {element.splevel}</p>
                        </div>
                    )
                })}
            </div>
            <div className='skills card'>
                <h2>Habilidades/<br/>conocimientos</h2>
                {skills.map(element => {
                    return (
                        <div>
                            <p>{element}</p>
                        </div>
                    )
                })}
            </div>
            <div className='volunteer card'>
                <h2>Voluntariado</h2>
                {volunteer.map(element => {
                    return (
                        <div key={JSON.stringify(element)}>
                            <p className='name'>{element.name}</p>
                            <p>{element.where}</p>
                            <p>{element.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default More
