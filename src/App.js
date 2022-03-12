import './App.css';
import Layout from "./Components/Layout.js"
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Content from './Components/Content';
import Footer from './Components/Footer';
import translation from './intl/stringContent.json';
import { languageContext } from './LanguageContext.js';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('et');
  const [language, setLanguage] = useState(translation['et']);
  useEffect( () => { setLanguage(translation[value]); }, [value] );

  return (
    <languageContext.Provider value={{ value, setValue, language }}>
      <Layout>
        <NavBar/>
        <Header/>
        <Content/>
        <Footer/>
      </Layout>
    </languageContext.Provider>
  );
}

export default App;