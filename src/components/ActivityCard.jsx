// src/components/ActivityCard.jsx
export default function ActivityCard({ activity, selected, onToggle }) {
  if (!activity) return null;

  const {
    name,
    type,
    durationHours,
    difficulty,
    suitableFor,
    area,
    description,
    image,
  } = activity;

  return (
    <article className={`activity-card ${selected ? 'selected' : ''}`}>

      {image && (
        <div className="activity-image-wrapper">
          <img src={image} alt={name} className="activity-image" />
        </div>
      )}

      <header className="activity-card-header">
        <h3>{name}</h3>
        <p className="duration">{type} · approx. {durationHours} h</p>
      </header>

      {(difficulty || area || (suitableFor && suitableFor.length > 0)) && (
        <div className="activity-meta">
          {difficulty && <span className="meta-chip">Difficulty: <strong>{difficulty}</strong></span>}
          {area && <span className="meta-chip">Area: <strong>{area}</strong></span>}
          {suitableFor && suitableFor.length > 0 && (
            <span className="meta-chip">Suitable for: <strong>{suitableFor.join(', ')}</strong></span>
          )}
        </div>
      )}

      <p className="activity-description">{description}</p>

      <button type="button" onClick={onToggle}>
        {selected ? 'Remove from my plan' : 'Add to my plan'}
      </button>
    </article>
  );
}
