// A tiny component that just shows one statistic (e.g. "Visited: 3").
export default function StatCard({ label, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-main">
        <span className="stat-card-icon">{icon}</span>
        <span className="stat-card-value">{value}</span>
      </div>
      <p className="stat-card-label">{label}</p>
    </div>
  );
}
