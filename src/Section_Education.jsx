import { useState } from "react";
import { generalInfo, educationInfo, experienceInfo } from './data.js';


export default function EducationSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [inputValues, setInputValues] = useState({schoolName: '', typeOfDegree: '', areaOfStudy: '', yearsAttended: ''});

    let buttonText = 'Edit';
    if(activeIndex == 0) buttonText = 'Edit';
    else buttonText = 'Done';
    
    function toggleActiveIndex() {
        !activeIndex ? (setActiveIndex(1)) : (setActiveIndex(0));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues(prevValues => ({...prevValues, [name]: value}));
    };

    return (
        <>
            <h2>Education</h2>
            <EducationInfo isActive={activeIndex === 0}>
                <b>School Name: </b> {inputValues.schoolName} <br />
                <b>Degree Type: </b> {inputValues.typeOfDegree} <br />
                <b>Area of Study: </b> {inputValues.areaOfStudy} <br />
                <b>Years Attended: </b> {inputValues.yearsAttended} <br />
            </EducationInfo>

            <EducationInfo isActive={activeIndex === 1}>
                <form className="educationInfoForm" >
                    <label><b>School Name: </b><input 
                        type="text" 
                        name="schoolName"
                        value={inputValues.schoolName}
                        onChange={handleInputChange}
                    /></label> <br />
                    
                    <label><b>Degree Type: </b><input 
                        type="text" 
                        name="typeOfDegree"
                        value={inputValues.typeOfDegree}
                        onChange={handleInputChange}
                    /></label> <br />

                    <label><b>Area of Study: </b><input 
                        type="text" 
                        name="areaOfStudy"
                        value={inputValues.areaOfStudy}
                        onChange={handleInputChange}
                    /></label> <br />

                    <label><b>Years Attended: </b><input 
                        type="text" 
                        name="yearsAttended"
                        value={inputValues.yearsAttended}
                        onChange={handleInputChange}
                    /></label> <br />
                </form>
            </EducationInfo>

            <button onClick={ () => toggleActiveIndex() }> 
                {buttonText}
            </button>
        </>
    );
};

function EducationInfo({ children, isActive }) {
    return (
        <section>
            {isActive ? <>{children}</> : ''}
        </section>
    );
};