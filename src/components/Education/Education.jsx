import React from 'react';
import './Education.scss';

const Education = ({ education }) => {
    return (
        <div className='education'>
            <div className='card'>
                <h2>Formación</h2>
                {education.map(element => {
                    return (
                        <div key={JSON.stringify(element)}>
                            <p className='name'>&#128221; {element.name}</p>
                            <p>{element.date}</p>
                            <p>{element.where}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Education
