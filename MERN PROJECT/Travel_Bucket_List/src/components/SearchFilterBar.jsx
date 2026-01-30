import { Search, Plus } from "lucide-react";
import FilterButton from "./FilterButton";
import "./SearchFilterBar.css";

// Combined search box, filter buttons and "Add" button.
// This component is "dumb": it only calls the functions
// passed from the parent, it does not own any state itself.
export default function SearchFilterBar({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
  setShowAddForm,
}) {
  return (
    <div className="search-bar">
      {/* Search box */}
      <div className="search-input-box">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search destinations..."
        />
      </div>

      {/* Filter buttons */}
      <div className="filters">
        <FilterButton
          label="All"
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        <FilterButton
          label="Wishlist"
          active={filter === "wishlist"}
          onClick={() => setFilter("wishlist")}
        />
        <FilterButton
          label="Visited"
          active={filter === "visited"}
          onClick={() => setFilter("visited")}
        />
      </div>

      {/* Button to open the "Add destination" form */}
      <button
        type="button"
        className="add-btn"
        onClick={() => setShowAddForm(true)}
      >
        <Plus size={18} />
        Add
      </button>
    </div>
  );
}
