export const trim = (value, decimal) => {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimal,
  })
  return formatter.format(Number(value))
}
