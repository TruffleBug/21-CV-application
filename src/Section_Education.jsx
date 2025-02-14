import { useState } from "react";
// import { generalInfo, educationInfo, experienceInfo } from './data.js';

let educationInfo = [
    {id: crypto.randomUUID(), schoolName: '', typeOfDegree: '', areaOfStudy: '', yearsAttended: ''},
];

function EducationInfo({ school, updateArray }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [schoolInputValues, setSchoolInputValues] = useState(school);

    function toggleActiveIndex() {
        !activeIndex ? (setActiveIndex(1)) : (setActiveIndex(0));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSchoolInputValues(prevValues => ({...prevValues, [name]: value}));
    };

    if(activeIndex === 0) {
        return (
            <section>
                <b>School Name: </b> {school.schoolName} <br />
                <b>Degree Type: </b> {school.typeOfDegree} <br />
                <b>Area of Study: </b> {school.areaOfStudy} <br />
                <b>Years Attended: </b> {school.yearsAttended} <br />

                <button onClick={() => toggleActiveIndex() }> Edit </button>
                </section>
        );
    } else if(activeIndex === 1) {
        return (
            <section>
                <form className="educationInfoForm" >
                    <label><b>School Name: </b><input 
                        type="text" 
                        name="schoolName"
                        value={schoolInputValues.schoolName}
                        onChange={handleInputChange}
                    /></label> <br />
                    
                    <label><b>Degree Type: </b><input 
                        type="text" 
                        name="typeOfDegree"
                        value={schoolInputValues.typeOfDegree}
                        onChange={handleInputChange}
                    /></label> <br />

                    <label><b>Area of Study: </b><input 
                        type="text" 
                        name="areaOfStudy"
                        value={schoolInputValues.areaOfStudy}
                        onChange={handleInputChange}
                    /></label> <br />

                    <label><b>Years Attended: </b><input 
                        type="text" 
                        name="yearsAttended"
                        value={schoolInputValues.yearsAttended}
                        onChange={handleInputChange}
                    /></label> 
                </form>
                <button onClick={ () => (toggleActiveIndex(), updateArray(school.id, schoolInputValues)) }> Done </button>
            </section> 
        );
    };
};

// --------------------------------------------------------------------------

export default function EducationSection() {
    const [schools, setSchools] = useState(educationInfo);

    function updateArray(schoolId, newValues) {
        setSchools(schools.map(school => {
            return school.id === schoolId ? { ...school, ...newValues } : school
        }));
    };

    const listItems = schools.map(school => 
        <li key={school.id}>
            <EducationInfo 
                school={school} 
                updateArray={updateArray}
            />
            <button className='deleteButton' onClick={() => {setSchools(schools.filter(s => s.id !== school.id))}}> Delete </button>
        </li>
    );
    
    return (
        <section className='educationSection topic' >
            <h2>Education</h2>
            <ul>{listItems}</ul>
            <button onClick={() => {setSchools([...schools, {id: crypto.randomUUID(), schoolName: '', typeOfDegree: '', areaOfStudy: '', yearsAttended: ''}])}}> Add </button>
        </section>
    );
};