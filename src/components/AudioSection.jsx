// src/components/AudioSection.jsx
import ambience from '../assets/audio/audio-SantSalvador.mp3';

export default function AudioSection() {
  return (
    <section id="audio" className="audio-section">
      <h2>Listen to Santa Coloma</h2>
      <p>
        Close your eyes and imagine yourself walking through Sant Salvador Park, with the sound of the stream and the birds.
      </p>
      <audio controls src={ambience}>
        Your browser does not support audio playback.
      </audio>
    </section>
  );
}
