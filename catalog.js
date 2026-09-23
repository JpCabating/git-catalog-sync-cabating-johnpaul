function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) return 0;
  return Math.min(20, Math.round(daysLate * ratePerDay));
}

module.exports = { isValidLoan, calculateLateFee };
