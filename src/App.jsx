import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import More from './components/More/More';
import { CV } from "./CV/cv";

const { hero, education, experience, languages, skills, volunteer } = CV;



const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <div>
        <Hero hero={hero} />
        <About hero={hero} />
      </div>
      <nav>
        <button onClick={() => setShowEducation(true)}>Formación</button>
        <button onClick={() => setShowEducation(false)}>Experiencia</button>
      </nav>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        skills={skills}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
