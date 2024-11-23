import React from "react";
import './App.css';

// Define an interface for the section type
interface Section {
  title: string;
  description: string;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
}

const orte = ['Sonthofen', 'Kempten', 'Immenstadt', 'Oberstdorf', 'Blaichach', 'Burgberg', 'Wertach', 'Nesselwang', 'Hindelang', 'Isny', 'Wangen', 'Lindenberg', 'Leutkirch', 'Ulm', 'Senden'];


// Create an array of section objects
const sections: Section[] = Array.from({ length: 15 }, (_, index) => ({
  title: `Schlüsseldienst ${orte[index]}`,
  description: `Türöffnungen aller Art - Haus & Wohnungstüren • Tresore • Fahrzeuge • Elektronikschlösser.`,
  imageDesktop: require(`./images/optimized/desktop/image${index + 1}-desktop.webp`), // Dynamically require the images
  imageTablet: require(`./images/optimized/tablet/image${index + 1}-tablet.webp`), // Dynamically require the images
  imageMobile: require(`./images/optimized/mobile/image${index + 1}-mobile.webp`), // Dynamically require the images
}));


function App() {
  console.log('start')
  console.log(sections[1].imageDesktop)

  return (
    <div style={{ 
      scrollSnapType: 'y mandatory',
      height: '100vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      scrollBehavior: 'smooth', }}>
      {sections.map((section, index) => (
        <section key={index} style={{scrollSnapAlign: 'start'}}>
          <div style={{
            position: 'relative',  
            color: 'white',
            }}>
            <img
              loading="lazy"
              src={section.imageDesktop}
              srcSet={`${section.imageDesktop} 1920w, ${section.imageTablet} 1024w, ${section.imageMobile} 768w`} // Dynamic srcSet
                alt={section.title}
                style={{ width: '100vw', height: '100vh', objectFit: 'fill', display: 'block' }}
            />
            <div style={{position: 'absolute', top:'0', left: '0',  width: '100vw', height: '100vh', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
              <div style={{textAlign:'center', maxWidth:'90%', marginBottom:'50px', fontSize:'1.35rem', }}>
                <h2 style={{display:'inline-block', backdropFilter:'blur(5px)',}}>{section.title}</h2>
                <p style={{lineHeight:'1.3', fontWeight:'500', backdropFilter:'blur(5px)', }}>{section.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
