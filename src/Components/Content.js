import './Content.css';
import firstProjectImage from "../img/projects/project1.jpg"
import secondProjectImage from "../img/projects/project2.jpg"
import GitLogo from "../img/skills/GitHub.png"
import { useContext, useState, useEffect } from "react";
import { languageContext } from "../LanguageContext.js";

const Content = () => {
    const { language } = useContext(languageContext);
    const [projectLink, setProjectLink] = useState('Praktikakohvik2022');
    const [GitHubLink, SetGitHubLink] = useState('https://github.com/honogu/' + projectLink);
    useEffect( () => { SetGitHubLink('https://github.com/honogu/' + projectLink) }, [projectLink] );

    function openProject(id) {
        setProjectLink(id);
        makeChanges('openAnimationText', 'openAnimationImage', 'block');
    }

    function closeProject() {
        makeChanges('closeAnimationText', 'closeAnimationImage', 'none');
    }

    function makeChanges(textAnimation, imageAnimation, display) {
        document.getElementById('web').style.cssText = 'animation-name: ' + imageAnimation + '; animation-duration: 0.5s; animation-fill-mode: forwards';
        document.getElementById('projectText').style.cssText = 'animation-name: ' + textAnimation + '; animation-duration: 0.5s; animation-fill-mode: forwards';
        document.getElementById("backgourndBlur").style.cssText = 'display: ' + display;
    }

    return (
        <div className='main'>
            <h3 id='Title'>{language.content.title}</h3>
            <h1>{language.content.note}</h1>
            <section className="container-content">
                <div className="project-text">
                    <h3>{language.content.project_1_title}</h3>
                    <h2>{language.content.project_1_content.replaceAll('\\n', '\n')}</h2>
                </div>
                <div onClick={() => openProject('Praktikakohvik2022')} className="project-image">
                    <img src={secondProjectImage} alt="Praktikakohvik" id='hoverImage'></img>
                    <button><h2>{language.content.button.replaceAll('\\n', '\n')}</h2></button>
                </div>
                <div onClick={() => openProject('KGLan2019')} className="project-image" id='reverse1'>
                    <img src={firstProjectImage} alt="Kg Lan 2019" id='hoverImage'></img>
                    <button><h2>{language.content.button.replaceAll('\\n', '\n')}</h2></button>
                </div>
                <div className="project-text" id='reverse2'>
                    <h3>{language.content.project_2_title}</h3>
                    <h2>{language.content.project_2_content.replaceAll('\\n', '\n')}</h2>
                </div>
            </section>
            <div id='backgourndBlur'></div>
            <div id='projectText'>
                <h2>{language.content[projectLink].replaceAll('\\n', '\n')}<br/></h2>
                <a href={GitHubLink} rel="noreferrer" target="_blank" id='GitLink'><button><img src={GitLogo} alt='GitHubLogo'/>GitHub Link</button></a>
            </div>
            <img src={require("../img/projects/" + projectLink + ".png")} onClick={() => closeProject()} alt="Kg Lan 2019" id='web'></img>
        </div>
    )
};

export default Content;