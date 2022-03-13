import './NavBar.css';
import LinkedInLogo from "../img/png/LinkedIn_logo.png"
import LinkedInProfile from "../img/png/profileLinkedIn.png"
import EstPDFfile from "../img/CV/CV_EST.pdf"
import EngPDFfile from "../img/CV/CV_ENG.pdf"
import Skill from "./Skills"
import { useContext, useState, useEffect } from "react";
import { languageContext } from "../LanguageContext.js";

const NavBar = () => {
    const { value, setValue, language } = useContext(languageContext);
    const [PDFFileLink, SetPDFFileLink] = useState(EstPDFfile);
    useEffect( () => { (value === 'et') ? SetPDFFileLink(EstPDFfile) : SetPDFFileLink(EngPDFfile) }, [value] );

    return (
        <nav>
            <div className='NavBar'>
                <img src={LinkedInLogo} alt="LinkedIn Logo" id='LinkedInHover'/>
                <img src={require("../img/svg/" + value + "_lipp.svg")} alt="Language Flag" onClick={ () => (value === 'en') ? setValue('et') : setValue('en') } id='Flag' className='inside'/>
                <div className='buttons'>
                    <a href='https://www.linkedin.com/in/honogu' rel="noreferrer" target="_blank"><button id='LinkedInButton'>{language.LinkedIn.LinkedInButton}</button></a>
                    <a href={PDFFileLink} rel="noreferrer" target="_blank"><button id='CVButton'>{language.LinkedIn.CVButton}</button></a>
                </div>
            </div>
            <img src={require("../img/svg/" + value + "_lipp.svg")} alt="Language Flag" onClick={ () => (value === 'en') ? setValue('et') : setValue('en') } id='Flag' className='outside'/>
            <div className='SideNavBar'>
                <h4>Linked</h4><img src={LinkedInProfile} alt='LinkedIn Profile' id='LinkedInImage'/>
                <h3>Holger Nõgu</h3>
                <h2>{language.LinkedIn.description}</h2>
                <h4 id='SkillTitle'>{language.LinkedIn.Programming}</h4>
                <section className='Skills'>
                    <Skill Src={'HTML'}/>
                    <Skill Src={'CSS'}/>
                    <Skill Src={'JavaScript'}/>
                    <Skill Src={'React JS'}/>
                    <Skill Src={'CSharp'}/>
                    <Skill Src={'GitBash'}/>
                </section>
                <h4 id='SoftwareTitle'>{language.LinkedIn.Software}</h4>
                <section className='Skills'>
                    <Skill Src={'GitHub'}/>
                    <Skill Src={'Node js'}/>
                    <Skill Src={'Figma'}/>
                    <Skill Src={'Office 365'}/>
                    <Skill Src={'Adobe'}/>
                </section>
            </div>
        </nav>
    )
};

export default NavBar;