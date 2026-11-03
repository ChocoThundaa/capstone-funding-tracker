// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = Number(opportunity.days_left);

  // Only date-specific labels are shown for dates that are overdue or due soon.
  if (Number.isNaN(daysLeft)) {
    return;
  }

  cell.classList.add("deadline");

  if (daysLeft < 0) {
    cell.classList.add("deadline-overdue");
    addDeadlineLabel(cell, "Overdue");
    return;
  }

  if (daysLeft === 0) {
    cell.classList.add("deadline-today");
    addDeadlineLabel(cell, "Due today");
    return;
  }

  if (daysLeft <= 7) {
    cell.classList.add("deadline-soon");
    const unit = daysLeft === 1 ? "day" : "days";
    addDeadlineLabel(cell, `Due in ${daysLeft} ${unit}`);
  }
}

function addDeadlineLabel(cell, text) {
  const label = document.createElement("span");
  label.className = "deadline-label";
  label.textContent = text;
  cell.appendChild(label);
}
