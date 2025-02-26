import { useState } from "react";
import languages from "./data/languages";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div>
      <h1>TITOLO</h1>
      <div>
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang.title}
          </button>
        ))}
      </div>
      <Card title={selectedLanguage.title} description={selectedLanguage.description} />
    </div>
  );
}

export default App;