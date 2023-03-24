function uniceString(string) {
  let arrayString = string.split("; ");
  let unique = new Set(arrayString);
  return unique;
}

console.log(uniceString("cherry; orange; cherry; banana; banana"));
