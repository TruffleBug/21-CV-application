import { useState } from "react";
import { generalInfo, educationInfo, experienceInfo } from './data.js';
import GeneralSection from "./Section_General.jsx";
import EducationSection from "./Section_Education.jsx";


export default function CV() {
    return (
        <>
            <h1>CV</h1>
            <GeneralSection /> 
            <EducationSection />
        </>
    )
}