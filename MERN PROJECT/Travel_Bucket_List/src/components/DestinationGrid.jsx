import DestinationCard from "./DestinationCard";

// Just responsible for laying out a grid of cards.
// All actions are passed down further into each `DestinationCard`.
export default function DestinationGrid({
  destinations,
  onToggleVisited,
  onDelete,
}) {
  return (
    <div className="destinations-grid">
      {destinations.map((dest) => (
        <DestinationCard
          key={dest.id}
          destination={dest}
          onToggleVisited={onToggleVisited}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
