import { useState } from "react";
import { generalInfo, educationInfo, experienceInfo } from './data.js';


export default function GeneralSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [inputValues, setInputValues] = useState({fullName: '', email: '', phone: ''});

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
            <h2>General Information</h2>
            <GeneralInfo isActive={activeIndex === 0}>
                <b>Name: </b> {inputValues.fullName} <br />
                <b>Email: </b> {inputValues.email} <br />
                <b>Phone: </b> {inputValues.phone} <br />
            </GeneralInfo>

            <GeneralInfo isActive={activeIndex === 1}>
                <form className="generalInfoForm" >
                    <label><b>Name: </b><input 
                        type="text" 
                        name='fullName'
                        value={inputValues.fullName}
                        onChange={handleInputChange}
                    /></label> 
                    <br />
                    <label><b>Email: </b><input 
                        type="text" 
                        name='email'
                        value={inputValues.email}
                        onChange={handleInputChange}
                    /></label> 
                    <br />
                    <label><b>Phone: </b><input 
                        type="text" 
                        name='phone'
                        value={inputValues.phone}
                        onChange={handleInputChange}
                    /></label>
                </form>
            </GeneralInfo>

            <button onClick={ () => toggleActiveIndex() }> 
                {buttonText}
            </button>
        </>
    );
};

function GeneralInfo({ children, isActive }) {
    return (
        <section>
            {isActive ? <>{children}</> : ''}
        </section>
    );
};