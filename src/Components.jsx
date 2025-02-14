import { generalInfo, educationInfo, experienceInfo } from './data.js';
import GeneralSection from "./Section_General.jsx";
import EducationSection from "./Section_Education.jsx";
import ExperienceSection from './Section_Experience.jsx';


export default function CV() {
    return (
        <>
            <h1>CV</h1>
            <GeneralSection /> 
            <EducationSection />
            <ExperienceSection />
        </>
    )
}