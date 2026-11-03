// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const label = deadlineLabel(opportunity.days_left);
  if (label === null) {
    return; // More than 7 days away: just show the date.
  }

  const badge = document.createElement("span");
  badge.className = "deadline-badge " + label.className;
  badge.textContent = label.text;
  cell.appendChild(badge);
}

// Picks the text and colour for a deadline, using days_left only.
// Returns null when the deadline is more than 7 days away.
function deadlineLabel(daysLeft) {
  if (daysLeft < 0) {
    return { text: "Overdue", className: "deadline-overdue" };
  }
  if (daysLeft === 0) {
    return { text: "Due today", className: "deadline-today" };
  }
  if (daysLeft === 1) {
    return { text: "Due in 1 day", className: "deadline-soon" };
  }
  if (daysLeft <= 7) {
    return { text: "Due in " + daysLeft + " days", className: "deadline-soon" };
  }
  return null;
}
