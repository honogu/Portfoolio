import './Header.css';
import profileImage from "../img/png/img.png"
import { useContext } from "react";
import { languageContext } from "../LanguageContext.js";

const Header = () => {
    const { language } = useContext(languageContext);

    return (
        <header>
            <div className="text-container">
                <h4>Holger<br/>Nõgu</h4>
                <h3>{language.header.title}</h3>
            </div>
            <img src={profileImage} alt="Holger Nõgu"></img>
        </header>
    )
};

export default Header;