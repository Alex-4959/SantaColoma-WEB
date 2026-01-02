// src/components/Cart.jsx
export default function Cart({ selectedActivities }) {
  const totalHours = selectedActivities.reduce(
    (sum, activity) => sum + activity.durationHours,
    0
  );

  return (
    <aside className="trip-cart">
      <h2>Your travel plan</h2>
      {selectedActivities.length === 0 ? (
        <p>
          You haven’t selected any activities yet. Choose the ones you’re interested in and create your ideal getaway.
        </p>
      ) : (
        <>
          <ul>
            {selectedActivities.map((activity) => (
              <li key={activity.id}>{activity.name}</li>
            ))}
          </ul>
          <p className="total">
            Estimated total duration: {totalHours} h
          </p>
        </>
      )}
    </aside>
  );
}
