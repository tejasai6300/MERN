import { MapPin, Trash2, Check } from "lucide-react";

// Shows a single destination card with:
// - place name
// - country
// - budget vs estimated cost
// - visited status
// It also exposes 2 actions: toggle visited, and delete.
export default function DestinationCard({
  destination,
  onToggleVisited,
  onDelete,
}) {
  const {
    place,
    country,
    budget,
    days,
    estimatedCost,
    withinBudget,
    visited,
  } = destination;

  const budgetText =
    typeof budget === "number" && !Number.isNaN(budget)
      ? budget.toLocaleString()
      : "-";

  const estimateText =
    typeof estimatedCost === "number" && !Number.isNaN(estimatedCost)
      ? estimatedCost.toLocaleString()
      : "-";

  return (
    <article className="destination-card">
      <div className="destination-card-body">
        <h3>{place}</h3>
        <p className="destination-location">
          <MapPin size={16} /> {country}
        </p>

        <p className="destination-budget">
          <span>Budget: ${budgetText}</span>
          {typeof days === "number" && !Number.isNaN(days) && (
            <span> · {days} day{days === 1 ? "" : "s"}</span>
          )}
        </p>

        <p
          className={
            withinBudget ? "destination-budget-ok" : "destination-budget-high"
          }
        >
          Estimated cost: ${estimateText}{" "}
          {withinBudget ? "(within your budget)" : "(above your budget)"}
        </p>

        {visited && (
          <div className="destination-visited">
            <Check size={16} /> Visited
          </div>
        )}
      </div>

      <div className="destination-card-footer">
        <button
          type="button"
          onClick={() => onToggleVisited(destination.id)}
          className="btn-visit-toggle"
        >
          {visited ? "Mark as wishlist" : "Mark as visited"}
        </button>
        <button
          type="button"
          onClick={() => onDelete(destination.id)}
          className="btn-delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </article>
  );
}
