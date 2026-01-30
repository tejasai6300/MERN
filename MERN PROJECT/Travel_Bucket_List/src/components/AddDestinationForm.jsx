// This form lets the user add a new destination to the list.
// It does not know how the list is stored – it just calls `onAdd`
// with a simple destination object when the form is submitted.
// We also collect a trip budget so we can compare it with an estimated cost.
export default function AddDestinationForm({
  onAdd,
  onClose,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add Destination</h2>

        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();

            const place = e.target.place.value.trim();
            const country = e.target.country.value.trim();
            const budget = Number(e.target.budget.value);
            const days = Number(e.target.days.value);

            const COST_PER_DAY = 120;
            const estimatedCost = days * COST_PER_DAY;
            const withinBudget = budget >= estimatedCost;

            const destination = {
              place,
              country,
              budget,
              days,
              estimatedCost,
              withinBudget,
              visited: false,
            };

            onAdd(destination);
            onClose();
          }}
        >
          <div className="form-row">
            <input
              name="place"
              placeholder="Place name (e.g. Paris)"
              required
            />
          </div>
          <div className="form-row">
            <input
              name="country"
              placeholder="Country"
              required
            />
          </div>
          <div className="form-row">
            <input
              name="budget"
              type="number"
              min="0"
              placeholder="Your budget for this trip (USD)"
              required
            />
          </div>
          <div className="form-row">
            <input
              name="days"
              type="number"
              min="1"
              placeholder="Number of days"
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
