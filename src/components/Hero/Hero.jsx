import React from 'react';
import "./Hero.scss";

const Hero = ({hero}) => {
    return (
        <div className='hero'>
            <img src={hero.image} alt={hero.name} width="200px"/>
            <div className='card'>
                <h2>{hero.name}</h2>
                <p>{hero.city}</p>
                <p>&#9993;{hero.email}</p>
                <p><a href={hero.gitHub}>GitHub</a></p>
                <p><a href={hero.linkedIn}>LinkedIn</a></p>
            </div>
        </div>
    )
}

export default Hero
