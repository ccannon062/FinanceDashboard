export const cleanNumbers = (number) => {
  const num = Number(number);
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + " T";
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + " B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + " M";
  } else {
    return num.toFixed(2).toString();
  }
};
