// Small reusable button used for the three filter options.
export default function FilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "filter-btn filter-btn-active" : "filter-btn"}
    >
      {label}
    </button>
  );
}
