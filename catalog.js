function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) return 0;
  let fee = Math.round(daysLate * ratePerDay);
  fee = Math.min(20, fee);
  fee = Math.max(1, fee);
  return fee;
}

module.exports = { isValidLoan, calculateLateFee };
