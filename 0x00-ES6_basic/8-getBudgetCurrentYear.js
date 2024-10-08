function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const incomeKey = `income-${getCurrentYear()}`;
  const gdpKey = `gdp-${getCurrentYear()}`;
  const capitaKey = `capita-${getCurrentYear()}`;

  return { [incomeKey]: income, [gdpKey]: gdp, [capitaKey]: capita };
}
