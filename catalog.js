function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  return Math.min(20, Math.floor(daysLate * ratePerDay));
}

module.exports = { isValidLoan, calculateLateFee };
