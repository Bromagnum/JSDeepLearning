// chalange 1

const getCelcius = (fahren) => {
  const cel = fahren - 32;
  const a = 5 / 9;
  return cel * a;
};
console.log(getCelcius(32));

// chalacge 2

const minMax = (nums) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, 3, 4, 5, 6]));
