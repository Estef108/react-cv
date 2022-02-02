import React from 'react';
import './About.scss';


const About = ({ hero }) => {
    return (
        <div className='about'>
            <div className='card'>
                <h2>Sobre mí</h2>
                {hero.aboutMe.map((element) => {
                    return (
                        <div key={JSON.stringify(element)} className='element'>
                        <p>{element.info}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default About
