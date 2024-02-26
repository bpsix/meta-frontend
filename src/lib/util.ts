export function getFormattedCurrency(n: number) {
  const str = n.toString();
  const parts = str.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const prefix = n < 0 ? "- $" : "+ $";
  return `${prefix}${parts.join(".")}`;
}
