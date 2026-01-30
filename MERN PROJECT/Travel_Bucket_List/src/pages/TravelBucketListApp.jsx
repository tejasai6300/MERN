import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchFilterBar from "../components/SearchFilterBar";
import AddDestinationForm from "../components/AddDestinationForm";
import DestinationGrid from "../components/DestinationGrid";
import EmptyState from "../components/EmptyState";

// This is the "brain" of the app.
// It:
// 1. Stores all destinations in state
// 2. Loads/saves them from/to localStorage (per logged-in user)
// 3. Decides which destinations to show (search + filters)
// 4. Passes simple props down into presentational components
export default function TravelBucketListApp({ currentUser, onLogout }) {
  // All destinations the user has added.
  const [destinations, setDestinations] = useState([]);
  // Controls whether the "Add destination" popup is visible.
  const [showAddForm, setShowAddForm] = useState(false);
  // "all" | "visited" | "wishlist"
  const [filter, setFilter] = useState("all");
  // Text from the search box.
  const [searchQuery, setSearchQuery] = useState("");

  // Store lists per user using a key like "travelBucketList_jane@example.com".
  const storageKey = currentUser
    ? `travelBucketList_${currentUser.email}`
    : "travelBucketList";

  // Load saved destinations once, when the component first mounts.
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setDestinations(JSON.parse(saved));
  }, [storageKey]);

  // Whenever destinations change, save them to localStorage.
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(destinations));
  }, [destinations, storageKey]);

  // Add a new destination to the list.
  const addDestination = (destination) => {
    // Give each destination a unique id (based on current time).
    setDestinations([...destinations, { ...destination, id: Date.now() }]);
    setShowAddForm(false);
  };

  // Remove one destination by id.
  const deleteDestination = (id) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  // Flip the `visited` boolean for one destination.
  const toggleVisited = (id) => {
    setDestinations(
      destinations.map((d) =>
        d.id === id ? { ...d, visited: !d.visited } : d
      )
    );
  };

  // First apply the "visited / wishlist / all" filter,
  // then apply the search text on both place and country.
  const filteredDestinations = destinations
    .filter((d) => {
      if (filter === "visited") return d.visited;
      if (filter === "wishlist") return !d.visited;
      return true;
    })
    .filter(
      (d) =>
        d.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Simple statistics to show in the header.
  const stats = {
    total: destinations.length,
    visited: destinations.filter((d) => d.visited).length,
    wishlist: destinations.filter((d) => !d.visited).length,
  };

  return (
    <div className="app-background">
      <div className="app-container">
        <div className="user-bar">
          <span>
            Signed in as{" "}
            <strong>{currentUser?.name || currentUser?.email}</strong>
          </span>
          <button type="button" className="user-bar-logout" onClick={onLogout}>
            Log out
          </button>
        </div>

        <Header stats={stats} />

        <SearchFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filter={filter}
          setFilter={setFilter}
          setShowAddForm={setShowAddForm}
        />

        {showAddForm && (
          <AddDestinationForm
            onAdd={addDestination}
            onClose={() => setShowAddForm(false)}
          />
        )}

        <DestinationGrid
          destinations={filteredDestinations}
          onToggleVisited={toggleVisited}
          onDelete={deleteDestination}
        />

        {filteredDestinations.length === 0 && (
          <EmptyState filter={filter} searchQuery={searchQuery} />
        )}
      </div>
    </div>
  );
}
