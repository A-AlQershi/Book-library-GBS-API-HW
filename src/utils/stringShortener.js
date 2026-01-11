function stringShortener(str) {
  if (str.length > 75) {
    return str.slice(0, 70) + "...";
  }
  return str;
}

export default stringShortener;