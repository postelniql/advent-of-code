const input = await Deno.readTextFile("./input.txt");

let currentMax = -1;
let currentSum = 0;

input.split(/\r?\n/).forEach((line) => {
  if (isNaN(parseInt(line))) {
    currentMax = Math.max(currentMax, currentSum);
    currentSum = 0;
  } else {
    currentSum += parseInt(line);
  }
});

console.log("result is: ", currentMax);
