// src/components/ActivitiesSection.jsx
import { useState } from 'react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import Cart from './Cart';

export default function ActivitiesSection() {
  const [selected, setSelected] = useState([]);

  const toggleActivity = (activity) => {
    setSelected((current) => {
      const exists = current.find((a) => a.id === activity.id);
      if (exists) {
        return current.filter((a) => a.id !== activity.id);
      }
      return [...current, activity];
    });
  };

  return (
    <section id="planifica" className="activities">
      <div className="activities-list">
        <h2>Plan your activities</h2>
        <p>
          Choose what you want to do during your visit to Santa Coloma de Farners and create your personalized plan.
        </p>
        <div className="activities-grid">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              selected={!!selected.find((a) => a.id === activity.id)}
              onToggle={() => toggleActivity(activity)}
            />
          ))}
        </div>
      </div>
      <Cart selectedActivities={selected} />
    </section>
  );
}
