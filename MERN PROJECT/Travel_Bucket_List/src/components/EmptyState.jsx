import { Globe } from "lucide-react";

// Shows a friendly message when there is nothing to show in the grid.
// Message depends on both the current filter and the search text.
export default function EmptyState({ filter, searchQuery }) {
  let message = "No destinations yet";

  if (searchQuery) message = `No results for "${searchQuery}"`;
  else if (filter === "visited") message = "No visited places";
  else if (filter === "wishlist") message = "Wishlist empty";

  return (
    <div className="empty-state">
      <Globe className="empty-state-icon" />
      <p>{message}</p>
    </div>
  );
}
