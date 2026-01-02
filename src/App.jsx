// src/App.jsx
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Attractions from './components/Attractions';
import ActivitiesSection from './components/ActivitiesSection';
import AudioSection from './components/AudioSection';
import Gallery from './components/Gallery';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Hero />
        <Highlights />
        <Attractions />
        <ActivitiesSection />
        <AudioSection />
        <Gallery />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
