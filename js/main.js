const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomInteger = (min, max, decimalPlaces) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand.toFixed(decimalPlaces));
}

getRandomNumber(0, 10);
getRandomInteger(0, 1, 2);
