const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomInteger = (min, max, decimalPlaces) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.round(rand * factorOfTen) / factorOfTen;
}

getRandomNumber(0, 10);
getRandomInteger(0, 1, 2);
