const fetchData = async () => {
  const response = await fetch("/data/dessert.json");
  console.log(response);
  return "test";
};
function filterDuplicates(arr, prop) {
  const seen = new Set();
  return arr.filter((item) => {
    const key = item[prop];
    if (seen.has(key)) {
      return false;
    } else {
      seen.add(key);
      return true;
    }
  });
}
const formatCurrency = (price) => {
  return `$${price.toFixed(2)}`;
};
export { fetchData, filterDuplicates, formatCurrency };
