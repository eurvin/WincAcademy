function calculateSupply(age, dailyAmount) {
  let yearsToLive = 86 - age;
  let yearlySupply = 365 * dailyAmount;
  let supply = Math.round(yearsToLive * yearlySupply);
  console.log(supply);
  let lifetimeSupply = `You will need ${supply} to last you until the ripe old age of 86`;
  console.log(lifetimeSupply);
}

calculateSupply(25, 4.5);

function recalculateSupply(age, dailyAmount) {
  let supply = Math.round((87 - age) * (365 * dailyAmount));
  let lifetimeSupply = `You will need ${supply} to last you until the ripe old age of 87`;
  console.log(lifetimeSupply);
}

recalculateSupply(51, 2.7);
