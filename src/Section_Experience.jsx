import { useState } from "react";
// import { generalInfo, experienceInfo, experienceInfo } from './data.js';

let experienceInfo = [
    {id: crypto.randomUUID(), company: '', title: '', tasks: '', years: ''},
    {id: crypto.randomUUID(), company: 'Ashley & Vance Engineering', title: 'Civil Engineer', tasks: ['task1', 'task2'], years: '2019-2024'},
    {id: crypto.randomUUID(), company: 'EVstudio', title: 'Civil Engineer', tasks: ['task1', 'another task', 'yet another task'], years: '2016-2019'},
];

function ExperienceInfo({ experience, updateArray }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [experienceInputValues, setExperienceInputValues] = useState(experience);

    function toggleActiveIndex() {
        !activeIndex ? (setActiveIndex(1)) : (setActiveIndex(0));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExperienceInputValues(prevValues => ({...prevValues, [name]: value}));
    };

    if(activeIndex === 0) {
        return (
            <section>
                <b>Company: </b> {experience.company} <br />
                <b>Title: </b> {experience.title} <br />
                <b>Tasks: </b> {experience.tasks} <br />
                <b>Years: </b> {experience.years} <br />

                <button onClick={() => toggleActiveIndex() }> Edit </button>
                </section>
        );
    } else if(activeIndex === 1) {
        return (
            <section>
                <form className="experienceInfoForm" >
                    <label><b>Company: </b><input 
                        type="text" 
                        name="company"
                        value={experienceInputValues.company}
                        onChange={handleInputChange}
                    /></label> <br />
                    
                    <label><b>Title: </b><input 
                        type="text" 
                        name="title"
                        value={experienceInputValues.title}
                        onChange={handleInputChange}
                    /></label> <br />

                    <label><b>Tasks: </b><input 
                        type="text" 
                        name="tasks"
                        value={experienceInputValues.tasks}
                        onChange={handleInputChange}
                    /></label> <br />

                    <label><b>Years: </b><input 
                        type="text" 
                        name="years"
                        value={experienceInputValues.years}
                        onChange={handleInputChange}
                    /></label> 
                </form>
                <button onClick={ () => (toggleActiveIndex(), updateArray(experience.id, experienceInputValues)) }> Done </button>
            </section> 
        );
    };
};

// --------------------------------------------------------------------------

export default function ExperienceSection() {
    const [experiences, setExperiences] = useState(experienceInfo);

    function updateArray(experienceId, newValues) {
        setExperiences(experiences.map(experience => {
            return experience.id === experienceId ? { ...experience, ...newValues } : experience
        }));
    };

    const listItems = experiences.map(experience => 
        <li key={experience.id}>
            <ExperienceInfo 
                experience={experience} 
                updateArray={updateArray}
            />
            <button className='deleteButton' onClick={() => {setExperiences(experiences.filter(exp => exp.id !== experience.id))}}> Delete </button>
        </li>
    );
    
    return (
        <section className='experienceSection topic' >
            <h2>Experience</h2>
            <ul>{listItems}</ul>
            <button onClick={() => {setExperiences([...experiences, {id: crypto.randomUUID(), Company: '', Title: '', Tasks: [], Years: ''}])}}> Add </button>
        </section>
    );
};