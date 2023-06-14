import React, { useState } from 'react';
import LanguageSwitcher from './components/languageSwitcher/LanguageSwitcher';
import en from './static/en.json';
import jp from './static/jp.json';

export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {}
});

function App() {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };


  let langData;
  if (language === 'en') {
    langData = en;
  }
  if (language === 'jp') {
    langData = jp;
  }

  const helloWorld = langData.helloWorld;


  return (
    <LanguageContext.Provider value={value}>
      <h2>Current Language: {language}</h2>
      <p>Click button to change to jp</p>
      <p>{helloWorld}</p>
      <div>
        {/* Can be nested */}
        <LanguageSwitcher />
      </div>
    </LanguageContext.Provider>
  );
}



export default App;
