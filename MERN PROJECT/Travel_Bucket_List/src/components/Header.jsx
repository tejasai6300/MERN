import { Globe, MapPin, Check } from "lucide-react";
import StatCard from "./StatCard";

// Simple visual header for the app.
// It receives the `stats` object from the parent and only displays it.
export default function Header({ stats }) {
  return (
    <header className="app-header">
      <div className="app-title-row">
        <Globe className="app-title-icon" />
        <h1 className="app-title-text">Travel Bucket List</h1>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Places" value={stats.total} icon={<MapPin />} />
        <StatCard label="Visited" value={stats.visited} icon={<Check />} />
        <StatCard label="Wishlist" value={stats.wishlist} icon={<Globe />} />
      </div>
    </header>
  );
}
