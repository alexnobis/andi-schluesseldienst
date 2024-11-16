import React from 'react';
import logo from './logo.svg';
import './App.css';

// Define an interface for the section type
interface Section {
  title: string;
  description: string;
  image: string;
}

const orte = ['Immenstadt', 'Oberstdorf', 'Sonthofen', 'Ort4', 'Ort6', 'Ort7', 'Ort8', 'Ort9', 'Ort10', 'Ort11', 'Ort12', 'Ort13', 'Ort14', 'Ort15', 'Ort16','Ort17', 'Ort18', 'Ort19', 'Ort20'];


// Create an array of section objects
const sections: Section[] = Array.from({ length: 19 }, (_, index) => ({
  title: `Schlüsseldienst ${orte [index]}`,
  description: `Türöffnungen aller Art - Haus & Wohnungstüren • Tresore • Fahrzeuge • Elektronikschlösser.`,
  image: require(`./images/image${index + 1}.jpg`), // Dynamically require the images
}));

function App() {
  
  return (
    <div>
      {sections.map((section, index) => (
        <section key={index}>
          <div style={{position: 'relative',  color: 'white'}}>
            <img
              src={section.image}
              alt={section.title}
              style={{ width: '100%', height: '100vh'}}
            />
            <div style={{position: 'absolute', top:'0', left: '0',  width: '100%', height: '100vh', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', backgroundColor:'rgba(74, 73, 73, 0.804)'}}>
              <div style={{textAlign:'center', width:'100%', padding:'20px', fontSize:'1.25rem'}}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
